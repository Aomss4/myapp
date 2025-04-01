import cv2
import time
import os
from datetime import datetime

# โหลดโมเดล Haar Cascade สำหรับตรวจจับใบหน้า
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# ตั้งค่ากล้องหรือสตรีมมิ่ง
capture_source = 0  # เปลี่ยนเป็น URL ได้ เช่น 'rtsp://your_stream_url'
capture = cv2.VideoCapture(capture_source)

# ตั้งค่าความละเอียดและ FPS
frame_width = int(capture.get(3))
frame_height = int(capture.get(4))
fps = int(capture.get(cv2.CAP_PROP_FPS)) or 30  # หากดึงค่า FPS ไม่ได้ให้ใช้ 30

# สร้างโฟลเดอร์บันทึกวิดีโอหากยังไม่มี
output_folder = "recorded_videos"
os.makedirs(output_folder, exist_ok=True)

# ฟังก์ชันสร้างชื่อไฟล์วิดีโอตามเวลา
get_filename = lambda: os.path.join(output_folder, f"record_{datetime.now().strftime('%Y%m%d_%H%M%S')}.mp4")

# สร้างตัวแปลงไฟล์วิดีโอ (ใช้ MP4V codec)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
video_out = cv2.VideoWriter(get_filename(), fourcc, fps, (frame_width, frame_height))

start_time = time.time()

while True:
    ret, frame = capture.read()
    if not ret:
        print("Error: ไม่สามารถอ่านเฟรมได้")
        break
    
    # แปลงเป็นขาวดำเพื่อตรวจจับใบหน้า
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

    # วาดกรอบรอบใบหน้าที่ตรวจพบ
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
    
    video_out.write(frame)
    cv2.imshow('Recording (Face Detection)', frame)
    
    # เช็คว่า 5 นาทีผ่านไปหรือยัง (300 วินาที)
    if time.time() - start_time >= 30:
        print("เปลี่ยนไฟล์วิดีโอใหม่")
        video_out.release()
        video_out = cv2.VideoWriter(get_filename(), fourcc, fps, (frame_width, frame_height))
        start_time = time.time()
    
    # ออกจากลูปเมื่อกด 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# ปิดทุกอย่างเมื่อหยุดโปรแกรม
video_out.release()
capture.release()
cv2.destroyAllWindows()

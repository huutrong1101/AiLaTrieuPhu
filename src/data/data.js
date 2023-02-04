const data = [
  {
    id: 1,
    question: "Phát biểu sai về trang thông tin điện tử là:",
    answers: [
      {
        text: "Một trình duyệt Web",
        correct: true,
      },
      {
        text: "Một trang web là tập tin HTML hoặc XHTML có thể truy nhập dùng giao thức HTTP hoặc HTTPS",
        correct: false,
      },
      {
        text: "Có thể được xây dựng bởi nhiều ngôn ngữ lập trình",
        correct: false,
      },
      {
        text: "Một hoặc nhiều trang web thường nằm trên một tên miền hoặc tên miền phụ trên www",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Hai người đã tạo được tài khoản thư điện tử, phát biểu sai là:",
    answers: [
      {
        text: "Hộp thư của cả hai đều nằm trên máy Mail Server",
        correct: false,
      },
      {
        text: "Hai người này buộc phải lựa chọn hai tên đăng nhập khác nhau",
        correct: false,
      },
      {
        text: "Người này có thể mở được hộp thư của người kia và ngược lại nếu như 2 người biết tên đăng nhập và mật khẩu của nhau",
        correct: false,
      },
      {
        text: "Mật khẩu mở hộp thư của hai người này phải khác nhau",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "Thao tác không thực hiện được với trang Web:",
    answers: [
      {
        text: "Xoá nội dung bằng cách chọn đoạn nội dung và nhấn nút Delete ",
        correct: true,
      },
      {
        text: "Sao chép 1 ảnh trên trang Web về máy cá nhân",
        correct: false,
      },
      {
        text: "Sao chép 1 đọan nội dung trên trang Web về máy cá nhân",
        correct: false,
      },
      {
        text: "Xem lại trang Web đã xem mà không cần kết nối Internet",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Trên mạng Internet, quy định tên miền “.gov” dành cho các tổ chức:",
    answers: [
      {
        text: "Y tế",
        correct: true,
      },
      {
        text: "Quân đội",
        correct: false,
      },
      {
        text: "Chính phủ",
        correct: true,
      },
      {
        text: "Giáo dục",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Để sử dụng mạng Internet hiệu quả, an toàn. Bạn không nên:",
    answers: [
      {
        text: "Luôn không ngừng học tập, tu dưỡng đạo đức lối sống theo qui định của pháp luật,nhà nước thực hiện nghiêm túc các quy định của pháp luật về Internet",
        correct: false,
      },
      {
        text: "Sắp xếp, bố trí thời gian một cách khoa học, hợp lý cho việc sử dụng Internet",
        correct: false,
      },
      {
        text: "Đưa nhiều thông tin thâṭ, chính xác về bản thân khi tham gia maṇ g Internet: Số tài khoản ngân hàng, mật khẩu, số thẻ căn cước (CMTND)…",
        correct: true,
      },
      {
        text: "Chọn lọc nguồn thông tin đúng đắn. Cảnh giác với những thông tin nguy hại, tiêu phí thời gian, sức lực, tiền bạc, bạo lực",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Trình duyệt Mozilla Firefox, để lưu lại nội dung của một trang web kèm hình ảnh vào thư mục trong máy tính cá nhân. Ta vào Thẻ - File, trong mục Save As type. Ta chọn mục nào sau đây?",
    answers: [
      {
        text: "Web Page, complete",
        correct: true,
      },
      {
        text: "Web Page, HTML only",
        correct: false,
      },
      {
        text: "Text File",
        correct: false,
      },
      {
        text: "All Files",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Trình duyệt Mozilla Firefox, để thiết lập in nội dung của một trang web theo khổ giấy ngang. Ta chọn Thẻ File – Page Setup. Sau đó, ta chọn tiếp thao tác nào sau đây trong mục Orientation?",
    answers: [
      {
        text: "Landscape",
        correct: true,
      },
      {
        text: "Portrait",
        correct: false,
      },
      {
        text: "Vertical",
        correct: false,
      },
      {
        text: "Horizontal",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Trình duyệt Mozilla Firefox, để thiết lập in nội dung của một trang web theo khổ giấy đứng. Ta chọn Thẻ File – Page Setup. Sau đó, ta chọn tiếp thao tác nào sau đây trong mục Orientation?",
    answers: [
      {
        text: "Portrait",
        correct: true,
      },
      {
        text: "Landscape",
        correct: false,
      },
      {
        text: "Vertical",
        correct: false,
      },
      {
        text: "Horizontal",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Các thành phần của tên miền được phân cách bằng ký tự nào?",
    answers: [
      {
        text: "“,’’",
        correct: false,
      },
      {
        text: "“;’’",
        correct: false,
      },
      {
        text: "“.’’ (dấu chấm)",
        correct: true,
      },
      {
        text: " “*’’",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Để xóa Email đã nhận ở trang gmail.com, thực hiện như thế nào?",
    answers: [
      {
        text: "Inbox -> chọn Email cần xóa -> Compose",
        correct: false,
      },
      {
        text: "Inbox -> chọn Email cần xóa -> Check mail",
        correct: false,
      },
      {
        text: "Inbox -> chọn Email cần xóa -> Delete",
        correct: true,
      },
      {
        text: "Inbox -> chọn Email cần xóa -> Sent mail",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question:
      "Khi soạn thảo Email trong giao diện bằng tiếng anh, nếu muốn gửi tệp tin đính kèm, bấm vào nút nào?",
    answers: [
      {
        text: "Send",
        correct: false,
      },
      {
        text: "Copy",
        correct: false,
      },
      {
        text: "File -> Save",
        correct: false,
      },
      {
        text: "Attachment",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question:
      "Trình duyệt Mozilla Firefox, để lưu lại nội dung của một trang web vào thư mục trong máy tính cá nhân. Ta chọn thao tác nào sau đây?",
    answers: [
      {
        text: "Thẻ File – Save ",
        correct: false,
      },
      {
        text: "Thẻ Edit – Save",
        correct: false,
      },
      {
        text: "Thẻ File – Save As ",
        correct: true,
      },
      {
        text: "Thẻ Edit – Save As",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:
      "Trình duyệt Mozilla Firefox, để lưu lại nội dung của một trang web thành một tập tin ký tự vào thư mục trong máy tính cá nhân. Ta vào Thẻ - File, trong mục Save As type. Ta chọn mục nào sau đây?:",
    answers: [
      {
        text: "Web Page, complete",
        correct: false,
      },
      {
        text: "Text File",
        correct: true,
      },
      {
        text: "Web Page, HTML only",
        correct: false,
      },
      {
        text: "All Files",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question:
      ": Trình duyệt Mozilla Firefox, để xem trước nội dung cần in của một trang web. Ta chọn thao tác nào sau đây?",
    answers: [
      {
        text: "Thẻ File – Print Preview",
        correct: true,
      },
      {
        text: "Thẻ File – Print",
        correct: false,
      },
      {
        text: "Thẻ View – Print",
        correct: false,
      },
      {
        text: "Thẻ View – Print Preview",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Khi nhận được tệp tin đính kèm trong hộp thư, nên xử lý như thế nào để đảm bảo an toàn cho máy tính?",
    answers: [
      {
        text: "Mở tệp tin này ra để kiểm tra loại tệp tin",
        correct: false,
      },
      {
        text: "Lưu bản sao tệp tin này vào đĩa cứng và mở bản sao này",
        correct: false,
      },
      {
        text: "Quét tệp tin này bằng chương trình chống virus",
        correct: true,
      },
      {
        text: "Mở tệp tin và in ra giấy",
        correct: false,
      },
    ],
  },
];

export default data;

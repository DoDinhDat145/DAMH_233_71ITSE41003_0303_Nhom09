from docx import Document

# Create a new Document
doc = Document()

# Add Title
doc.add_heading('Quản Lý Source Code bằng Git', 0)

# Add Introduction
doc.add_heading('1. Tạo Dự Án và Khởi Tạo Git Repository', level=1)
doc.add_paragraph(
    "1.1. Tạo thư mục cho dự án và khởi tạo Git repository:"
)
doc.add_paragraph(
    """
    ```bash
    mkdir card_reader_project
    cd card_reader_project
    git init
    ```
    """
)

# Add Section for Branch Structure
doc.add_heading('2. Thiết Lập Cấu Trúc Nhánh', level=1)
doc.add_paragraph(
    "2.1. Tạo nhánh `master` (mặc định khi khởi tạo):"
)
doc.add_paragraph(
    """
    ```bash
    git checkout -b master
    ```
    """
)
doc.add_paragraph(
    "2.2. Tạo nhánh riêng cho mỗi thành viên:"
)
doc.add_paragraph(
    """
    ```bash
    git checkout -b alice-branch
    git checkout -b bob-branch
    git checkout -b charlie-branch
    ```
    """
)
doc.add_paragraph(
    "2.3. Tạo nhánh UAT:"
)
doc.add_paragraph(
    """
    ```bash
    git checkout -b uat
    ```
    """
)
doc.add_paragraph(
    "2.4. Đẩy các nhánh lên remote repository:"
)
doc.add_paragraph(
    """
    ```bash
    git push origin master
    git push origin alice-branch
    git push origin bob-branch
    git push origin charlie-branch
    git push origin uat
    ```
    """
)

# Add Section for Branch Management Rules
doc.add_heading('3. Quy Tắc Quản Lý Nhánh', level=1)
doc.add_paragraph(
    """
    - **Nhánh `master`**: Chỉ nhóm trưởng quản lý và thực hiện merge vào nhánh này.
    - **Nhánh riêng của mỗi thành viên**: Mỗi thành viên làm việc trên nhánh riêng của mình.
    - **Nhánh `uat`**: Sử dụng để QC deploy và kiểm thử. Chỉ nhóm trưởng merge code từ các nhánh thành viên vào nhánh `uat`.
    """
)

# Add Section for Merge Process
doc.add_heading('4. Quy Trình Merge Code', level=1)
doc.add_paragraph(
    """
    4.1. Thành viên tạo pull request từ nhánh của mình vào nhánh `uat` hoặc `master`.

    4.2. Nhóm trưởng xem xét và merge pull request.

    4.3. Nhóm trưởng đảm bảo chỉ merge nhánh `uat` vào `master` sau khi đã qua kiểm thử.
    """
)

# Save the document
doc.save('/mnt/data/QuanLySourceCodeBangGit.docx')

let books = [
    {
        bookCode: "B01",
        title: "JavaScript Cơ Bản",
        category: "Lập trình",
        price: 120000,
        totalCopies: 10,
        availableCopies: 2,
        shelfLocation: "A01"
    },
    {
        bookCode: "B02",
        title: "C Programming",
        category: "Lập trình",
        price: 150000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A02"
    },
    {
        bookCode: "B03",
        title: "Cơ Sở Dữ Liệu",
        category: "Database",
        price: 180000,
        totalCopies: 6,
        availableCopies: 3,
        shelfLocation: "B01"
    }
];

books.push({
    bookCode: "B04",
    title: "HTML CSS",
    category: "Web",
    price: 100000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "B02"
});

console.log("SAU KHI NHẬP SÁCH MỚI");
console.log(books);

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode == "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;

            if (books[i].availableCopies == 0) {
                books[i].status = "HẾT SÁCH TRÊN KỆ";
            }
        }
    }
}

console.log("SAU KHI SINH VIÊN MƯỢN B01");
console.log(books);

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode == "B03") {
        books.splice(i, 1);
        break;
    }
}

console.log("SAU KHI THANH LÝ B03");
console.log(books);

let totalBooks = 0;
let totalValue = 0;

for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}

console.log("\n" + "=".repeat(60));
console.log("              BẢNG KIỂM KÊ KHO SÁCH");
console.log("=".repeat(60));

for (let i = 0; i < books.length; i++) {
    console.log(
        books[i].bookCode.padEnd(8) +
        books[i].title.padEnd(22) +
        String(books[i].totalCopies).padStart(5) +
        String(books[i].availableCopies).padStart(8) +
        books[i].shelfLocation.padStart(8)
    );
}

console.log("-".repeat(60));
console.log("Tổng số lượng sách :", totalBooks);
console.log("Tổng giá trị kho   :", totalValue, "VNĐ");
console.log("=".repeat(60));
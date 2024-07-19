// Activity 1
// Task 1

let Book = {
    title:"Rich dad poor dad",
    author:"Robert T. Kiyosaki and Sharon Lechter.",
    year:1997,
}

console.log(Book)

// Task 2
console.log("Title is:",Book.title)
console.log("Author is:",Book.author)

//Activity 2
//Task 3
Book.showTitleAuthor = function(){
    return `Title is ${this.title} and author is ${this.author}`   
}
let book_details = Book.showTitleAuthor()
console.log(book_details)

//Task 4
Book.updateYear=function(year)
    {
        this.year = year
    }
Book.updateYear(2000)
console.log(Book)

//Activity 3
//Task 5

let Library = {
    name:"Delhi Public Library",
    books:[
        {
            title:"Rich dad poor dad",
            author:"Robert T. Kiyosaki and Sharon Lechter.",
            year:1997,
        },
        {
            title:"The Richest man in babylon",
            author:"George Samuel Clason",
            year:1926,
        },
        {
            title:"The psychology of money",
            author:"Morgan Housel",
            year:2020,
        },
        {
            title:"Chanakya Neeti",
            author:"Chanakya neeti",
            year:"4th–3rd century BCE",
        }
    ]
}

console.log(Library)

//Task 6
console.log("Name of the library is ",Library.name)
for(let i = 0;i<Library.books.length;i++)
{
    console.log((i+1)+"'st book title is ",Library.books[i].title)
}

//Activity 4
//Task 7
Book.showTitleYear = function()
{
    return(`Title of the book : ${this.title} and year : ${this.year}`)
}
let sty = Book.showTitleYear()
console.log(sty)

// Activity 5
// Task 8
for(let i in Book)
{
    console.log(i+" : "+Book[i])
}


//Task 9
console.log(Object.keys(Book))
console.log(Object.values(Book))

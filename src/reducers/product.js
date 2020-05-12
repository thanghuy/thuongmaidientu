import img from '../images/dam-bi-ghet.jpg';
import img1 from '../images/sinh-ra-de-chay.jpg';
import img2 from '../images/lam-it-duoc-nhieu.jpg';
import img3 from '../images/bi-mat-hanh-trinh-tinh-yeu.jpg';
var initialState = [
    {
         id : 1,
         name : "sách 1",
         slug : "sach-1",
         img : img,
         price : 3000
    },
    {
         id : 2,
         name : "sách 2",
         slug : "sach-2",
         img : img1,
         price : 113000
    },
    {
         id : 3,
         name : "sách 3",
         slug : "sach-3",
         img : img,
         price : 33000
    },
    {
        id : 4,
        name : "sách 4",
        slug : "sach-4",
        img : img2,
        price : 33000
    },
    {
        id : 5,
        name : "sách 5",
        slug : "sach-5",
        img : img3,
        price : 33000
    },
    {
        id : 6,
        name : "sách 6",
        slug : "sach-6",
        img : img2,
        price : 33000
    }
    
];
const product = (state = initialState , action) => {
    switch (action.type) {
        default : return [...state];
    }
}
export default product;
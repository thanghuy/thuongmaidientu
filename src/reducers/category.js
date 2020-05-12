var category = [
    {
        name : 'Sách 1',
        to : '/sach-tam-ly',
        exact : true
    },
    {
      name : 'Sách 2',
      to : '/sach-the-thao',
      exact : false
    },
    {
      name : 'Sách 3',
      to : '/sach-ke-toan',
      exact : false
    },
    {
      name : 'Sách 3',
      to : '/sach-ke-toan',
      exact : false
    },
    {
      name : 'Sách 3',
      to : '/sach-ke-toan',
      exact : false
    },
    {
      name : 'Sách 4',
      to : '/product',
      exact : false
    }
    
]
const Link = (state = category , action) => {
    switch (action.type) {
        default : return [...state];
    }
}
export default Link;
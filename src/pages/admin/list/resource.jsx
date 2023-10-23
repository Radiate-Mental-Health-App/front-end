import { Avatar } from "@mui/material"

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName:'User', width: 230, renderCell: (params)=>{
        return(
            <div className="cellAv">
                <Avatar className='Img' src={params.row.photo} alt='avatar' />
                {params.row.fullName}
            </div>
        );
    },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'password', headerName: 'Password', width: 230 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
]

export const userRows = [

    {
        id: 1,
        fullName: 'Jamie Lanister',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://image.enjoymovie.net/fr1xrnZq9_d-H01uc0DGxgcMADk=/256x256/smart/core/p/L0pZo7GWPJ.jpg',
        gender: 'male',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Rawa Buaya',
        whatsappNo: '123-456-7890',
    },
    {
        id: 2,
        fullName: 'Saoirse Ronan',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://styles.redditmedia.com/t5_2t8yf/styles/communityIcon_vetq7tlmys561.png?width=256&s=a000a631bc10ec671a4694d7e16f3885bdbd536d',
        gender: 'female',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Kapuk',
        whatsappNo: '098-765-4321',
    },
    {
        id: 3,
        fullName: 'Jamie Lanister',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://image.enjoymovie.net/fr1xrnZq9_d-H01uc0DGxgcMADk=/256x256/smart/core/p/L0pZo7GWPJ.jpg',
        gender: 'male',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Rawa Buaya',
        whatsappNo: '123-456-7890',
    },
    {
        id: 4,
        fullName: 'Saoirse Ronan',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://styles.redditmedia.com/t5_2t8yf/styles/communityIcon_vetq7tlmys561.png?width=256&s=a000a631bc10ec671a4694d7e16f3885bdbd536d',
        gender: 'female',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Kapuk',
        whatsappNo: '098-765-4321',
    },
    {
        id: 5,
        fullName: 'Jamie Lanister',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://image.enjoymovie.net/fr1xrnZq9_d-H01uc0DGxgcMADk=/256x256/smart/core/p/L0pZo7GWPJ.jpg',
        gender: 'male',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Rawa Buaya',
        whatsappNo: '123-456-7890',
    },
    {
        id: 6,
        fullName: 'Saoirse Ronan',
        password: 'aB087gJgcskjhdebhj',
        email: "johndoe@example.com",
        photo: 'https://styles.redditmedia.com/t5_2t8yf/styles/communityIcon_vetq7tlmys561.png?width=256&s=a000a631bc10ec671a4694d7e16f3885bdbd536d',
        gender: 'female',
        dateOfBirth: '15-01-1996',
        cityOfResidence: 'Jakarta Barat',
        cityOfDistrict: 'Kapuk',
        whatsappNo: '098-765-4321',
    },
]
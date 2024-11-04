{

    const user = {
        name: "Rayhan",
        id: 201902186,
        address: {
            village: 'sonahar',
            postOffice: 'Khalisakotha',
            district: 'Barisal'
        },
        nationality: 'Bangladeshi'
    }


    //destructure.
    const { name,
        id: universityID,
        address: { village: vil }
    } = user;

    console.log(name);
    console.log(universityID);
    console.log(vil);






    //array destructure
    const mybody: string[] = ['eyes', 'ears', 'nose', 'head'];

    const [a, b, c] = mybody;


    

}




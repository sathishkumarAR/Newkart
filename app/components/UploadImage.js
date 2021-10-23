
const uploadImage=async(images, callback)=>{
    // console.log(images);
    var imagesArray=[];

    Promise.all(
        images.map(async(image)=>{
    
            let imageFile={ 
                uri:image,
                type:`image/${image.split(".")[1]}`,
                name:`image.${image.split(".")[1]}`
            }
    
            const data= new FormData();
            data.append("file",imageFile);
            data.append("upload_preset","newkartApp");
            data.append("cloud_name","wings06");
    
            const result =await fetch("https://api.cloudinary.com/v1_1/wings06/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json());
            
            imagesArray.push({
                url:result.secure_url,
                thumbnailUrl:"https://res.cloudinary.com/wings06/image/upload/w_100,c_scale/v"+result.version+"/"+result.public_id+"."+result.format
            });

        })
    )
    .then(()=>{
        // console.log(imagesArray);
        callback(imagesArray);
    })
    .catch(err=>{
        console.log(err);
    })


}

export default uploadImage;

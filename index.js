import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    // //agregar usuarios
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: "Jose",
    //         email: "jcalelr3@gmail.com",
    //         lastname: "rivera"
    //     }
    // })
    // console.log(newUser);


    // const users = await prisma.user.findMany()
    // // console.log(users);
    // users.map(user => {
    //     console.log(`${user.id} - ${user.name}`);
    // })


    // const user = await prisma.user.findFirst({
    //     where: {
    //         email: "juan@gmail.com",
    //         id: 1
    //     }  
    // })
    // console.log(user);

    // const user = await prisma.user.findFirst({
    //     where: {
    //         OR: [
    //             {id: 10},
    //             {email: "juan@gmail.com"}
    //         ]
    //     }  
    // })
    // console.log(user);



    // //manejo de errores
    // try{
    //     const user = await prisma.user.delete({
    //         where: {
    //             id: 2
    //         }
    //     })
    //     console.log(user);
    // }catch(error){
    //     if(error.code == "P2025"){
    //         console.log("usuario no encontrado");
    //     }
    // }

    
    // //actualizar usuarios
    // const user = await prisma.user.update({
    //     where: {
    //         email: "joel@gmail.com"
    //     },
    //     data: {
    //         email: "maria.gmail.com"
    //     }
    // })
    // console.log(user);


    //     //actualizar multiples campos
    // const result = await prisma.user.updateMany({
    //     where: {
    //         name: "Jose"
    //     },
    //     data: {
    //         lastname: "Perez"
    //     }
    // })
    // console.log(result);

    //         //eliminar multiples campos
    // const result = await prisma.user.deleteMany({
    //     where: {
    //         name: "Jose"
    //     }
    // })
    // console.log(result);

    // const users = await prisma.user.findMany()
    // console.log(users);

    // //metodo que sirve para modificar un usuario y si no existe crearlo 
    // const user = await prisma.user.upsert({
    //     where: {
    //         email: "maria@gmail.com"
    //     },
    //     create: {
    //         name: "Maria",
    //         email: "maria@gmail.com",
    //         lastname: "Bel"

    //     },
    //     update: {
    //         lastname: "Bel"
    //     }
    // })
    // console.log(user);



    // //eliminar el usuario creado
    // await prisma.user.delete({where: {id: 8}})



    // //crear un usuario con tablas relacionadas
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: "joe",
    //         email: "joel123@gmail.com",
    //         lastname: "Holland" 
    //     }
    // })
    // console.log(newUser);


    // const newPost = await prisma.post.create({
    //     data:{
    //         title: "mi primer publicacion",
    //         content: "este es mi primer post",
    //         author: {
    //             connect: {
    //                 id: newUser.id
    //             }
    //         }
    //     }
    // })
    // console.log(newPost);




    //crear un usuario y asignarle una publicación
    const newUser = await prisma.user.create({
        data: {
            name: "jose",
            email: "josept@gmail.com",
            lastname: "putul",
            posts: {
                create: {
                    title: "Programación",
                    content: "Aprende Python"
                }
            }
        }
    })


    // console.log(newUser);
    // //consultar la publicacion
    // const posts = await prisma.post.findMany()
    // console.log(posts);



    // //consultar datos relacionados
    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true
    //     }
    // }) 

    // users.forEach(user => {
    //     console.log('---------')
    //     console.log(`User: ${user.name}`);
    //     console.log(`Email: ${user.email}`);

    //     user.posts.forEach((post, i) => {
    //         console.log(`${i}. ${post.title} ${post.content}`);
    //     })
    // })
}






main()
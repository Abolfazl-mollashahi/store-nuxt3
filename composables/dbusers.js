import { usedb } from "~/stores/product"
import { useRoute } from "#vue-router"
let route = useRoute()
const usdbuser = () =>{
    

    
    let userfindd = ref('')

    const checkusers = (user) => {
        // if (!user.email.length) {
        //     console.log('جیمیل خالیه');
        // } else if (!user.password.length) {
        //     console.log('پسورد خالیه');
        // } else {
        //    let userfind = usedb.find((u) => {
        //         if (u.email === user.email && u.password === user.password) {
        //             return u
        //         }
        //     })
        //     if(userfind){
        //         console.log('ok',route.path);
        //         userfindd.value = userfind
                
        //     }else{
        //         console.log('no');
        //         userfindd.value = userfind
        //     }
        // }
        console.log(usedb);
    }

    return{
        
        userfindd,
        checkusers
    }

}



export default usdbuser

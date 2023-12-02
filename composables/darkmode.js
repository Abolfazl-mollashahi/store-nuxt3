
const useDarkMode =()=>{
    const isdarkmode = useState('dark',()=> false)

    return{
        isdarkmode
    }
}
export default useDarkMode




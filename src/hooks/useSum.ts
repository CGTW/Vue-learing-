import { ref , onMounted} from 'vue'
export default function ()
{
    //数据
    let sum = ref(0)


    //方法
    function add() {
      sum.value += 1
    
    }
   //钩子
   onMounted(()=>
  {
    add()
  })

    //向外界返回

    return {sum,add}
}


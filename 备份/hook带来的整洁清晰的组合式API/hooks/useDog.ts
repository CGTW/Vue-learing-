import {reactive,onMounted} from 'vue'
import axios from 'axios';

export default function ()
{   //数据
    let dogList = reactive(
        [
          'https://images.dog.ceo/breeds/pembroke/n02113023_6801.jpg'
      ]
      )
      //方法
    async function giveOtherDog()
      {
        try {
          let result =await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
          dogList.push( result.data.message )
        } catch (error) {
          alert (error)
        }
      
      }
      //钩子
      onMounted(()=>
        {
          giveOtherDog()
        })
      
   //向外提供数据
   return {dogList,giveOtherDog}
}

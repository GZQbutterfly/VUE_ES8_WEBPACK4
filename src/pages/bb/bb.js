import { Component,Vue } from 'vue-property-decorator';

// import './bb.scss';
@Component({
    template: require('./bb.html')
})
export class bb extends Vue {

    asyncData({store, route}){
          
        return true;
    }

    data(){
        return {
           
        }
    }

    mounted () {
       
       
        this.$nextTick(()=>{
            console.log('bb store: ', this.$store);
        });
    }
}
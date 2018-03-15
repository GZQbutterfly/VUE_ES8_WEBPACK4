import { Component,Vue } from 'vue-property-decorator';

// import './aa.scss';

@Component({
    template: require('./aa.html')
})
export class aa extends Vue {

    asyncData({store, route}){
        return store.dispatch('GET_USER', 'dd');
    }

    data(){
        console.log('store: ', this.$store.state.cache.users);
        return {
            ops: this.$store.state.cache.users
        }
    }

    mounted () {
        document.title="关于我们";
        console.log('asdasdsdaas567d: ', this.$store);


        this.$nextTick(()=>{
            setTimeout(()=>{
                this.ops = {
                    dd: 55
                };
                let aa = this.$store.dispatch('GET_USER', 'dd');
                aa.then((...args)=>{
                    console.log(...args);
                });
               
            }, 10000)

        });
    }
}
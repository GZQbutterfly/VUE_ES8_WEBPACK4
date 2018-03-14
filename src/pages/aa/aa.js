import { Component,Vue } from 'vue-property-decorator';

// import './aa.scss';
@Component({
    template: require('./aa.html')
})
export class aa extends Vue {
    mounted () {
        document.title="关于我们";
    }
}
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Child from './Child.vue'

@Component({
  components: { Child }
})
class Parent extends Vue {
  created () {
    console.log('comment this and save')
  }
}

export default Parent
</script>

import { useStore } from '../../stores/valtio-store'

const Sales = () => {
    const snap = useStore()
  return (
    <div>{Object.values(snap?.company?.departments?.sales?.employees).map(()=>{

        return (
            <div>sales</div>
        )
    })}</div>
  )
}

export default Sales
import { useStore } from '../../stores/valtio-store'

const Engineering = () => {
  const snap = useStore()
  return (
    <div>{Object.values(snap?.company?.departments?.engineering?.employees||{}).map((value)=>{

        return (
            <div>{value.firstName} - {value.lastName}</div>
        )
    })}</div>
  )
}

export default Engineering
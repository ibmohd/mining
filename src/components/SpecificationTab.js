
import {GrStatusGood} from 'react-icons/gr'


export const SpecificationTab = ({item}) => {

return (
  <div className='w-full min-h-[100vh] flex flex-col items-center'>
    <h2 className='text-3xl my-5 underline underline-offset-4 decoration-accent-primary'>Our Trade Specifications</h2>

    <div className='w-[90vw] grid grid-cols-3 text-center my-5'>
      <div className='col-span-1 border-2 border-black border-r-0 py-2'>{"Origin"}</div>
      <div className='col-span-2 border-2 border-black flex items-center justify-center  py-2'>{item?.origin}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Type"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.type}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Quantity"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.quantity}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Price"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.price}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Trial Order"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.["trial-order"]}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Payment Method"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.payment}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Shipping Time"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.shipping}</div>
      <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Loading Port"}</div>
      <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item?.port}</div>
    </div>

    {
      item?.quality ? <>
        <h2 className='text-3xl my-5 underline underline-offset-4 decoration-accent-primary'>Quality Specifications</h2>

        <div className='w-[90vw] grid grid-cols-3 text-center my-5'>
          <div className='col-span-1 border-2 border-black border-r-0 py-2'>{"Type"}</div>
          <div className='col-span-2 border-2 border-black flex items-center justify-center  py-2'>{item.quality?.type}</div>
          <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Impurities"}</div>
          <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item.quality?.impurities}</div>
          <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Moisture Content"}</div>
          <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item.quality?.moisture}</div>
          <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Preservation Process"}</div>
          <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item.quality?.preservation}</div>
          <div className='col-span-1 border-2 border-black border-t-0 flex items-center justify-center  border-r-0 py-2'>{"Inspection"}</div>
          <div className='col-span-2 border-2 border-black border-t-0 flex items-center justify-center  py-2'>{item.quality?.inspection}</div>

        </div>

      </>
      :
      null
    }
    
    <h2 className='text-3xl my-5 underline underline-offset-4 decoration-accent-primary mb-5'>Expected Shipping Documents</h2>
    {item?.["shipping-docs"].map((name,index) => (
      <div key={index} className='w-[90vw] grid grid-cols-3 text-center mt-1'>
        <div className='col-span-2 border-2 border-black border-r-0 flex items-center justify-center  py-2'>{name}</div>
        <div className='col-span-1 border-2 border-black  py-2 flex items-center justify-center text-2xl bg-emerald-700 text-white'><GrStatusGood color='white'/></div>
      </div>
    ))}
    

</div>
  )
}

import Image from "next/image";

export default function YourComponent() {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white h-full mx-10 mb-10'>
      <div className='text-black relative'>
        <div style={{ width: '45vw', height: '50vh' }}>
          <Image src={'/images/innovation.jpg'} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className='text-black'>
        text section
      </div>
    </div>
  );
}

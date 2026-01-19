import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div>
        <Image
          src="/assets/homeimg.jpg"
          alt="homeimg"
          width={200}
          height={500}
          className="w-full h-[550px]"
        ></Image>
      </div>
    </>
  );
}

import Image from "next/image"

export default function Alumni(){
    return(
        <div className="bg-[#2467C9] py-9 px-4 text-white">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold">Results</h2>
                  <p className="text-2xl font-medium">Few Of Our Alumni</p>
                </div>
        
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 flex-wrap">
                  <Image
                    src={"/Alumni/diksha.png"}
                    width={360}
                    height={235}
                    alt="alumni-image"
                    className="rounded-md"
                  />
                  <Image
                    src={"/Alumni/vedika.png"}
                    width={360}
                    height={235}
                    alt="alumni-image"
                    className="rounded-md"
                  />
                  <Image
                    src={"/Alumni/sneha.png"}
                    width={360}
                    height={235}
                    alt="alumni-image"
                    className="rounded-md"
                  />
                </div>
              </div>
    )
}
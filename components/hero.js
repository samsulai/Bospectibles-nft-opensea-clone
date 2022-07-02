import React from 'react'
import hero from "../assets/hero.png"
const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/pCw7QZULiqzHM1NO2W_dQKKO46KqKcgnLZ09Qa0KBh6XAFzHpfNombPAoqzpWiRAGVJNNuoldMUTxeBqSepPbROTiSw2lB4SzQ5CkUWErH3YkqWEis34nfwhWwoEEcUIHnCkUXBRqepACWIe344pjd_mplt7EvpNA4TKCuhycZe2Ja2BYcGuJiakMPdeJyuOnRKNRfce8Hy8juPM1hXzgloZwHXrJClQavN1ZSTldBaDOd-ZY1-hoeCYaHJDL7OCJEsczQfOc29zJm5PApiInZHy8HdNJ1XItr3KYn6CCXOGGwe2mlgDDPNYc5lnkQpksraBgZVoH1U3AxRsKHA3Xa8teRNCnP0Txe9KMw3C982TUMOGcyha7e9v0D3PUIJhirBuIYI2NefDOhVdZ8rf5BAz2z7KxeyyqSI7blS2gp6xmTo-tc3gqN0p-va2wBjyxEs8b0s9BoJNsi0Ku7Du41bpjKcpze1B_vmIfjkylVmZ7KeBejem7XibELRtqsY9lQpNwvUF9jtKaDO8jArM7flKR_ZCoYV4DwRl8YgKgL_hB0VL2XIHWUhfS_mMq4gb0TXKNvnEIaK27zieXXLaLj_k6CvbMFq6giZeXo6_a-F44cEr-WmZsukXeQ_JX3xEg_MfHD6TsoeHZpNsPLX1MRoK1GcY5MD6BvHBWJtKEaiFEfcUGxAXM9Ps2zPWVR2LS2EPBAS0MW-Rpt03KyDurdtHaH6jBEDP23d6No0k90BM9VR3HyYYTf_Itvg=w629-h640-no?authuser=0')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}


const Hero = () => {
return (
<div className={style.wrapper}>
<div className={style.container}>
<div className={style.contentWrapper}>
<div className={style.copyContainer}>
<div className={style.title}>
Disover, collect and sell extraordinary NFTs
</div>
<div className={style.description}>
Bospectibles is the World&apos;s first and largest NFT marketplace.
</div>
<div className={style.ctaContainer}>
<button className={style.accentedButton}>Explore</button>
<button className={style.button}>Create</button>
</div>
</div>
<div className={style.cardContainer}>
<img className="rounded-t-lg" src="https://lh3.googleusercontent.com/pCw7QZULiqzHM1NO2W_dQKKO46KqKcgnLZ09Qa0KBh6XAFzHpfNombPAoqzpWiRAGVJNNuoldMUTxeBqSepPbROTiSw2lB4SzQ5CkUWErH3YkqWEis34nfwhWwoEEcUIHnCkUXBRqepACWIe344pjd_mplt7EvpNA4TKCuhycZe2Ja2BYcGuJiakMPdeJyuOnRKNRfce8Hy8juPM1hXzgloZwHXrJClQavN1ZSTldBaDOd-ZY1-hoeCYaHJDL7OCJEsczQfOc29zJm5PApiInZHy8HdNJ1XItr3KYn6CCXOGGwe2mlgDDPNYc5lnkQpksraBgZVoH1U3AxRsKHA3Xa8teRNCnP0Txe9KMw3C982TUMOGcyha7e9v0D3PUIJhirBuIYI2NefDOhVdZ8rf5BAz2z7KxeyyqSI7blS2gp6xmTo-tc3gqN0p-va2wBjyxEs8b0s9BoJNsi0Ku7Du41bpjKcpze1B_vmIfjkylVmZ7KeBejem7XibELRtqsY9lQpNwvUF9jtKaDO8jArM7flKR_ZCoYV4DwRl8YgKgL_hB0VL2XIHWUhfS_mMq4gb0TXKNvnEIaK27zieXXLaLj_k6CvbMFq6giZeXo6_a-F44cEr-WmZsukXeQ_JX3xEg_MfHD6TsoeHZpNsPLX1MRoK1GcY5MD6BvHBWJtKEaiFEfcUGxAXM9Ps2zPWVR2LS2EPBAS0MW-Rpt03KyDurdtHaH6jBEDP23d6No0k90BM9VR3HyYYTf_Itvg=w629-h640-no?authuser=0" height={400} width={400}/>
<div className={style.infoContainer}>
<img 
className="h-[2.25rem] rounded-full" src={hero} alt=""
/>
<div className={style.author}>
<div className={style.name}>Bospectibles</div>
<a className="text-[#1868b7]" href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"></a>

</div>
</div>
</div>
</div>
</div>
</div>
)
}

export default Hero;
import Image from "next/image";
export function PromotionZone() {
  return (
    <section className="promotion-zone">
      <Image
          src="/images/promotion-zone-1.png"
          alt="Hoạt động tại Bánh Cuốn Tây Hồ 127"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
    </section>
  );
}
// export function PromotionZone() {
//   return (
//     <section className="promotion-zone">
//       <div className="promotion-zone__inner">
//         <h2 className="promotion-zone__title">Promotion zone</h2>

//         <div className="promotion-zone__grid">
//           {promotionImages.map((image) => (
//             <div key={image.id} className="promotion-zone__card">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={620}
//                 height={360}
//                 className="promotion-zone__image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
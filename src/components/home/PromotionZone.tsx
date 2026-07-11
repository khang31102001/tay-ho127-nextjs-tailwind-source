export function PromotionZone() {
  return <section className="promotion-zone">Promotion zone</section>;
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
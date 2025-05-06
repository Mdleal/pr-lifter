import React from 'react';
import { ParallaxScrollSecond } from './ui/parallax-scroll';

// Images of kids using fitness equipment
const images = [
  "https://i.etsystatic.com/56759122/r/il/dfe6f3/6703836547/il_1588xN.6703836547_mp0n.jpg",
  "https://i.etsystatic.com/56759122/r/il/d3dc68/6655797606/il_1588xN.6655797606_1cnv.jpg",
  "https://i.etsystatic.com/56759122/r/il/b00231/6703836141/il_1588xN.6703836141_ne5u.jpg",
  "https://i.etsystatic.com/56759122/r/il/fe2eb8/6698180991/il_1588xN.6698180991_sddf.jpg",
  "https://i.etsystatic.com/56759122/r/il/126f24/6661723946/il_1588xN.6661723946_rt88.jpg",
  "https://i.etsystatic.com/56759122/r/il/a87f35/6661955588/il_1588xN.6661955588_9s1u.jpg",
  "https://i.etsystatic.com/35860728/r/il/d3bc23/5965548661/il_1588xN.5965548661_qsqg.jpg",
  "https://i.etsystatic.com/56677637/r/il/ceb96e/6604402918/il_1588xN.6604402918_c2o0.jpg",
  "https://i.etsystatic.com/56677637/r/il/a9c119/6563615078/il_1588xN.6563615078_haxx.jpg",
  "https://i.etsystatic.com/56677637/r/il/55d96b/6589608587/il_1588xN.6589608587_7znr.jpg",
  "https://i.etsystatic.com/40172395/r/il/f10b0c/5429775874/il_1588xN.5429775874_fh2k.jpg",
  "https://i.etsystatic.com/40172395/r/il/4c10c6/5535053309/il_1588xN.5535053309_ccaw.jpg",
  "https://i.etsystatic.com/40172395/r/il/98a5a0/5477894753/il_1588xN.5477894753_8c72.jpg",
  "https://i.etsystatic.com/40172395/r/il/428c4e/5447283221/il_1588xN.5447283221_8a2j.jpg",
  "https://i.etsystatic.com/47624639/r/il/5b85fb/6697547757/il_1588xN.6697547757_8xl4.jpg",
  "https://i.etsystatic.com/47624639/r/il/b90684/6537936625/il_1588xN.6537936625_jloq.jpg",
  "https://i.etsystatic.com/21127207/r/il/12040a/5900846149/il_1588xN.5900846149_4y6e.jpg",
  "https://i.etsystatic.com/21127207/r/il/561bf1/5852751840/il_1588xN.5852751840_5wll.jpg",
  "https://i.etsystatic.com/43181671/r/il/4cba07/6649077154/il_1588xN.6649077154_4jsj.jpg",
  "https://i.etsystatic.com/43181671/r/il/2cc473/6649080570/il_1588xN.6649080570_e1mj.jpg",
  "https://i.etsystatic.com/8480684/r/il/f2376f/5455355113/il_1588xN.5455355113_j0vf.jpg",
  "https://i.etsystatic.com/8480684/r/il/9d5af7/5451897401/il_1588xN.5451897401_srex.jpg",
  "https://i.etsystatic.com/8480684/r/il/b2ccde/5056575527/il_1588xN.5056575527_ckwp.jpg",
  "https://i.etsystatic.com/8480684/r/il/67c3d3/5455363647/il_1588xN.5455363647_lmum.jpg"
];

const ParallaxGallery: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Little Athletes in Action</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Scroll through our gallery to see kids enjoying their MiniWOD equipment and building healthy habits early!
          </p>
        </div>
        
        <ParallaxScrollSecond images={images} className="rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default ParallaxGallery;
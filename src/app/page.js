'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        backgroundColor: '#F0EFEFFF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='background-img'
          src={dataSite.image_hero}
          colorText='#FCFCFCFF'
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withSubView
          images={[dataSite.image_hero, dataSite.image_hero2]}
          styleTextSecondSection={{
            color: 'black',
          }}
          withShadowText
          contentThirdSection={
            <div
              style={{ zIndex: 2 }}
              className='flex flex-col px-48'
              id='know-us'
            >
              <Typography.Title
                level={3}
                className='font-medium mb-10 text-center text-white'
              >
                Know Us
              </Typography.Title>
              <Missions
                textColor='#000'
                data={dataSite.info}
                gridColumns={3}
                variant='card'
              />
            </div>
          }
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='our-services'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Our Services
          </Typography.Title>
          <FeaturesV2
            gridColumns={3}
            version='v2'
            variant='card-with-image'
            features={dataSite.services.map((item) => {
              return { title: item.title, src: item.image };
            })}
          />
        </div>
        <div id='services'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={false}
              title='All Services'
              gridColumns={2}
              variant='carousel'
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='3'
              carouselOptions={{
                arrowColor: 'black',
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='card'
            variant='carousel'
            backgroundColor='#D2D2D2FF'
            references={dataSite.references}
            gridColumns={1}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

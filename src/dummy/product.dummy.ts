import { fakerKO as faker } from "@faker-js/faker";
// import { 
//   PRODUCT_NAMES, 
//   CATEGORIES, 
//   DELIVERY_TYPES, 
//   PACKAGE_TYPES 
// } from '../constants/product.constants';
interface ProductCategory{
  name:string;
  products:string[],
  images:string[]
}

const PRODUCT_CATEGORIES: ProductCategory[]=[
  {
    name:'채소/과일',
    products:[
      '유기농 양파 1kg',
      '무농약 당근 500g',
      '친환경 감자 2kg',
      '제주 한라봉 1박스',
      '국내산 삼겹살 300g',
      '신선 방울토마토 500g',
    '친환경 파프리카 3입',
    '무농약 고구마 1kg',
    '산지직송 사과 1.5kg',
    '제철 수박 1통',
    '유기농 브로콜리 1송이',
    '유기농 고구마 1kg',
    '신선 딸기 500g', '샤인머스켓 1kg', '친환경 오이 3입', '제철 배 1.5kg',
   
    ],
    images:[
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/sweetPotato.png?alt=media&token=3a5f7093-f1dc-4d69-b281-28fdf5500c82`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/apple.png?alt=media&token=703a7496-991b-414d-a749-1ecc54558ddb`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/corn.jpg?alt=media&token=99ff38e6-dd7f-48ce-b5d1-90b15fd4769a`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/kiwi.png?alt=media&token=1b3dd974-d1e1-4f54-93fb-d4af73a96b05`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/veg.jpg?alt=media&token=cc24e732-b95c-48d2-b2f1-88fdc4c3c335`
    ]
  },
  {
    name: '정육/계란',
    products: [
      '[1+등급] 한우 등심 300g',
      '무항생제 돼지 삼겹살 500g',
      '신선 닭가슴살 400g',
      '동물복지 유정란 10구',
       '무항생제 닭다리 500g', 
       '제주 흑돼지 오겹살 400g',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/meat.jpg?alt=media&token=b42b8b56-dc68-47ed-a0ec-6c8cb148c27a`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/meat.png?alt=media&token=63bf7823-ca66-4a6e-89b9-ee80061a9c51`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/chicken.png?alt=media&token=e17f15c9-f5be-471f-b409-02028165b19b`
      // `${BASE_URL}/images/chicken.png`,
      // ... 정육 관련 이미지
    ]
  },
  {
    name: ' 수산물',
    products: [
      '제철 자반고등어 2마리', '완도 전복 5미', '노르웨이 생연어 300g',
      '생물 백합 500g', '국산 생물오징어 2마리', '자연산 낙지 2마리',
      
    ],
    images: [
      // `${BASE_URL}/images/meat.png`,
      // `${BASE_URL}/images/chicken.png`,
      // ... 정육 관련 이미지
    ]
  },
  {
    name: '간식/과자',
    products: [
      '수제 과일칩 100g', '유기농 견과류 믹스 200g', '무첨가 말린망고 200g',
 '구운아몬드 300g', '프리미엄 건포도 250g', '무농약 곶감 10개입',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/peanut.jpg?alt=media&token=cd4e2c67-7235-473b-8bfd-73b763cdf21c`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/chips.jpg?alt=media&token=bd4e39dc-4a24-486a-9623-455a4a0e8c58`
      // `${BASE_URL}/images/chicken.png`,
      // ... 정육 관련 이미지
    ]
  },
   {
    name: '음료/커피',
    products: [
      '유기농 콜드브루 1L', '프리미엄 녹차 50티백', '착즙 오렌지주스 1L',
 '국산 보리차 40티백', '유기농 과일주스 3종', '프리미엄 원두커피 200g'
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-satya-27903-3158814.jpg?alt=media&token=932768a6-ffc2-4326-af7f-c6a87444eed3`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/juice.jpg?alt=media&token=663c9b5f-0120-4e4e-a606-0eb60c1fe82d`
      // `${BASE_URL}/images/meat.png`,
      // `${BASE_URL}/images/chicken.png`,
      // ... 정육 관련 이미지
    ]
  },
]
const PRODUCT_NAMES = [
    '유기농 양파 1kg',
    '무농약 당근 500g',
    '친환경 감자 2kg',
    '제주 한라봉 1박스',
    '국내산 삼겹살 300g',
    '신선 방울토마토 500g',
  '친환경 파프리카 3입',
  '무농약 고구마 1kg',
  '산지직송 사과 1.5kg',
  '제철 수박 1통',
  '유기농 브로콜리 1송이',
  '유기농 고구마 1kg',
  '신선 딸기 500g', '샤인머스켓 1kg', '친환경 오이 3입', '제철 배 1.5kg',
 
 // 정육/계란
 '[1+등급] 한우 등심 300g', '무항생제 돼지 삼겹살 500g', '신선 닭가슴살 400g',
 '동물복지 유정란 10구', '무항생제 닭다리 500g', '제주 흑돼지 오겹살 400g',
 
 // 수산물
 '제철 자반고등어 2마리', '완도 전복 5미', '노르웨이 생연어 300g',
 '생물 백합 500g', '국산 생물오징어 2마리', '자연산 낙지 2마리',
 
 // 간식/과자
 '수제 과일칩 100g', '유기농 견과류 믹스 200g', '무첨가 말린망고 200g',
 '구운아몬드 300g', '프리미엄 건포도 250g', '무농약 곶감 10개입',
 
 // 반찬
 '홈메이드 김치 1kg', '무농약 나물무침 200g', '맛간장 절임고추 300g',
 '국내산 젓갈모음 200g', '반찬세트 6종', '수제 장아찌 300g',
 
 // 음료/커피
 '유기농 콜드브루 1L', '프리미엄 녹차 50티백', '착즙 오렌지주스 1L',
 '국산 보리차 40티백', '유기농 과일주스 3종', '프리미엄 원두커피 200g'
  ];
  
  export const CATEGORIES = [
    '채소/과일',
    '정육/계란',
    '수산물/건해산',
    '쌀/잡곡/견과',
    '베이커리',
    ''
  ];
  
  const DESCRIPTIONS = [
    "엄선된 농가에서 수확한 신선한 채소로, 산지 직송을 통해 영양이 가득한 상태로 배송됩니다.",
    "국내 청정지역에서 정성껏 키워 더욱 신선하고 깨끗한 상태로 고객님께 전해드립니다.",
    "친환경 인증을 받은 농가에서 재배하여 아이들도 안심하고 먹을 수 있는 상품입니다.",
    "제철 맞아 가장 맛있는 시기에 수확하여, 최적의 상태로 배송해 드립니다.",
    "무농약 재배로 더욱 건강하게 키워 신선함이 살아있는 상태로 배송됩니다.",
    
    // 품질 관련
    "까다로운 기준으로 선별된 상품으로, 고객님께 최상의 품질을 약속드립니다.",
    "전문가들의 꼼꼼한 검수를 거쳐 선별된 최상급 상품만을 보내드립니다.",
    "고객 만족도 98%를 자랑하는 스테디셀러로 많은 분들의 사랑을 받고 있습니다.",
    
    // 신선도 관련
    "당일 수확한 신선함 그대로 산지에서 바로 보내드립니다.",
    "최적의 온도를 유지하는 특별 포장으로 신선도를 오래 유지할 수 있습니다.",
    "신선도 유지를 위한 특수 포장으로 배송되어 더욱 오래 신선함을 즐기실 수 있습니다.",
    
    // 유기농/친환경
    "유기농 인증을 받은 안전한 먹거리로, 가족 모두가 안심하고 즐기실 수 있습니다.",
    "친환경 인증을 받은 농장에서 재배되어 더욱 건강하고 안전한 상품입니다.",
    
    // 프리미엄/특별
    "이번 주 특별한 가격으로 만나보실 수 있는 프리미엄 상품입니다.",
    "온라인 독점으로 준비된 특별 상품으로 특별한 가격에 만나보실 수 있습니다.",
    
    // 영양/건강
    "제철을 맞아 영양이 풍부하고 맛도 좋아 건강한 식탁을 완성해드립니다.",
    "비타민과 무기질이 풍부하여 온가족의 건강한 식사에 도움을 드립니다.",
    
    // 포장/배송
    "산지에서 직접 배송되어 더욱 합리적인 가격으로 만나보실 수 있습니다.",
    "최첨단 신선 포장 시스템으로 포장되어 안전하게 배송됩니다.",
    "콜드체인 시스템을 통해 신선도를 유지하며 안전하게 배송해드립니다.",
    
    // 전통/장인
    "3대째 내려오는 전통 비법으로 만들어 더욱 특별한 맛을 자랑합니다.",
    "30년 경력의 장인이 엄선하여 만든 특별한 상품입니다.",
    
    // 원산지/생산지
    "청정 제주의 맑은 공기와 깨끗한 물로 키워 더욱 신선하고 맛있습니다.",
    "국내 최고의 산지에서 재배되어 품질이 보장된 상품입니다.",
    
    // 특별 행사
    "2024년 새롭게 선보이는 신상품으로 특별한 가격에 먼저 만나보세요.",
    "고객님들의 많은 사랑을 받아 재입고 된 베스트셀러 상품입니다.",
    "온라인 단독 특가로 준비된 특별한 상품을 만나보세요."
   ];
  //  const BASE_URL='http://localhost:4000'
  //  const PRODUCT_IMAGES = [
  //   // 이미지 URL 배열 정의
    
  //   `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/apple.png?alt=media&token=703a7496-991b-414d-a749-1ecc54558ddb`,

  //   // /static/images/apple.png
  //   `${BASE_URL}/images/chicken.png`,
  //   `${BASE_URL}/images/kiwi.png`,
  //   `${BASE_URL}/images/meat.png`,
  //   `${BASE_URL}/images/peanut.png`,
  //  ];

  export const DELIVERY_TYPES = ['무료배송', '유료배송'];
  export const PACKAGE_TYPES = ['상온', '냉장', '냉동'];

  

export const generateProducts = (count: number) => {
  const products = [];

  for (let i = 0; i < count; i++) {
    //배열에서 무작위로 값을 선택하기 위한 함수 arrayElement !!
    const category = faker.helpers.arrayElement(PRODUCT_CATEGORIES);
    const name=faker.helpers.arrayElement(category.products);
    const description=faker.helpers.arrayElement(DESCRIPTIONS);
    const img=faker.helpers.arrayElement(category.images);
    const price = faker.number.int({ min: 1000, max: 100000 });
    const salesPrice= Math.floor(price * 0.65);

    products.push({
      productName:`${name}`,
      price: price,
      sales: salesPrice,
      rdate: new Date(),
      thumbnail: img,
      img:  img,
      delivery: faker.helpers.arrayElement(DELIVERY_TYPES),
      seller: faker.company.name(),
      description: `${description}`,
      packageType: faker.helpers.arrayElement(PACKAGE_TYPES),
      //detail: faker.lorem.paragraph(),
      category: faker.helpers.arrayElement(CATEGORIES)
    });
  }

  return products;
};
import { fakerKO as faker } from "@faker-js/faker";

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
       `메추리알 150g`
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/meat.jpg?alt=media&token=b42b8b56-dc68-47ed-a0ec-6c8cb148c27a`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/meat.png?alt=media&token=63bf7823-ca66-4a6e-89b9-ee80061a9c51`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/chicken.png?alt=media&token=e17f15c9-f5be-471f-b409-02028165b19b`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-klaus-nielsen-6294399.jpg?alt=media&token=cf2a8cf2-54b3-4800-9c02-ef9487848370`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-goumbik-618775.jpg?alt=media&token=3ffe9e3b-d36d-40d1-a1f5-3c24088fb648`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-goumbik-616354.jpg?alt=media&token=31c3db1a-98aa-4054-afc4-83bcdd98cd6c`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-alesiakozik-6701181.jpg?alt=media&token=5631006b-c432-42d7-b4ed-4f2f33656a32`
    ]
  },
  {
    name: ' 수산물',
    products: [
      '제철 자반고등어 2마리', '완도 전복 5미', '노르웨이 생연어 300g',
      '생물 백합 500g', '국산 생물오징어 2마리', '자연산 낙지 2마리',
      
    ],
    images: [
        `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/oys.jpg?alt=media&token=0dac8979-9fd8-4ab3-b88b-718c62022754`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/shrimp.jpg?alt=media&token=ddf71fd5-4b98-4962-84eb-efdcb0655197`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/tuna.jpg?alt=media&token=90fc2832-a789-4a9f-ac05-52557b1fa8a5`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-ozgomz-1578445.jpg?alt=media&token=0ea76579-24dc-4d53-9063-27e89d65466d`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-lazarev-8971797.jpg?alt=media&token=480b3a8a-4130-4e0f-adf2-44b92c07c044`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-mali-229789.jpg?alt=media&token=3c589520-5494-4576-8282-076c9d5fd595`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-nadin-sh-78971847-29432179.jpg?alt=media&token=2e6d9c10-1990-45f5-85eb-2f6ef0a36ce5`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-kseniachernaya-3952075.jpg?alt=media&token=9f41de43-4580-4105-af63-64b49f1897e9`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-karolina-grabowska-4202250.jpg?alt=media&token=c760d214-ce18-4345-a003-f51a3b7b0d1b`
    ]
  },
  {
    name: '간식/과자',
    products: [
      '수제 과일칩 100g', '유기농 견과류 믹스 200g', '무첨가 말린망고 200g',
 '구운아몬드 300g', '프리미엄 건포도 250g', '무농약 곶감 10개입',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-ella-olsson-572949-3026806.jpg?alt=media&token=d1f8b89e-29aa-455d-ade6-4ef187ecbde8`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-mo-abrahim-1913938-3537844.jpg?alt=media&token=15196df6-627c-44b9-9597-1da74f2ca4b3`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-pixabay-71126.jpg?alt=media&token=39340161-1136-48a3-9798-f1331d892075`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-shattha-pilabut-38930-135755.jpg?alt=media&token=fd50b68f-dc89-4575-88f7-2d902c472aba`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-thatguycraig000-1582482.jpg?alt=media&token=d363636f-048a-4ff2-9bc9-68c7cd2897c7`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/delic.png?alt=media&token=d27469f4-6d5d-458a-802c-fd1b23c8676d`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-brunoscramgnon-106111.jpg?alt=media&token=3a22f53f-4cde-4518-addf-c57a54517472`,
`https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-pixabay-257834.jpg?alt=media&token=4ea9988a-cccb-40da-ac73-5ffaf43386c3`

 
    ]
  },
  {
    name: '국/반찬/메인요리',
    products: [
      '집밥 도시락 1인분', 
      '소고기 미역국 1팩', 
      '진한 사골곰탕 1팩',
      '한돈 제육볶음 300g', 
      '진미채 볶음 200g', 
      '명란젓갈 100g',
      '갈비찜 500g',
      '오징어 젓갈 200g',
      '묵은지 김치찌개 1팩',
      '간장게장 500g',
      '매콤 닭갈비 500g',
      '소고기 장조림 300g'
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/2021031004000003000102131.jpg?alt=media&token=84ce6c3e-a5a8-4ec9-ac8d-7ad1728827bf`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/20240730144255214264e2-e2ca-4327-921b-85889579836e.jpg?alt=media&token=cd454a61-97d3-4623-96e6-8c31426c341b`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/63116_67463_1556.png?alt=media&token=3df5a45d-fbda-42a3-b4b8-8aae90122912`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/noodles.jpg?alt=media&token=a4e453de-bec6-4877-9720-19063e914ff6`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/paik.jpeg?alt=media&token=11b4875d-d1fb-40f1-ab2d-f8cff0cb46ce`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/images.jpeg?alt=media&token=9e1fa41b-bd10-446a-87af-522ee7bb4b26`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/galbi.jpg?alt=media&token=d2281931-7008-4416-852c-bf17d023486a`
    ]
  },
  {
    name: '샐러드/간편식',
    products: [
      '닭가슴살 샐러드 200g', 
      '플레인 요거트볼 1개', 
      '단백질 샌드위치 세트',
      '퀴노아 베이컨 샐러드 300g', 
      '치킨 데리야끼덮밥 1팩', 
      '훈제연어 샐러드 250g',
      '리코타치즈 샐러드 250g',
      '아보카도 쉬림프 샐러드 300g',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-satya-27903-3158814.jpg?alt=media&token=932768a6-ffc2-4326-af7f-c6a87444eed3`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/juice.jpg?alt=media&token=663c9b5f-0120-4e4e-a606-0eb60c1fe82d`

    ]
  },
  {
    name: '면/양념/오일',
    products: [
      '태국 쌀국수 2인분', 
      '트러플 오일 250ml', 
      '일본 우동면 3인분',
      '엑스트라버진 올리브오일 500ml', 
      '간장소스 500ml', 
      '이탈리아 파스타면 500g',
      '고추장 500g',
      '참기름 250ml',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/noodle.jpg?alt=media&token=778b938e-5491-4a34-a50d-6f93bd3c6309`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/oil.jpg?alt=media&token=7497c6cd-67af-4586-a272-5cadfe4cf5c4`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/oil2.jpg?alt=media&token=2a5b40de-5ff0-44d1-a771-b540ca0d4050`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/spice.jpg?alt=media&token=641b6352-56e5-4a5d-93ee-ba027d13b576`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pasta.jpg?alt=media&token=29dbab74-0e86-450f-a29e-76e3e929946d`
    ]
  },
  {
    name: '생수/음료/우유/커피',
    products: [
      '에비앙 생수 2L', 
      '프리미엄 콜드브루 1L', 
      '무항생제 우유 1L',
      '제주 탄산수 500ml 6개입', 
      '유기농 두유 190ml 12팩', 
      '스페셜티 원두 200g',
      '무가당 아몬드밀크 1L',
      '녹차 티백 50개입',
      '과일주스 3종 세트',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/milk.jpg?alt=media&token=c063283a-981a-4e92-8bf5-cca9ff78c9d6`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/greentea.jpg?alt=media&token=c907a5f7-f2e6-4def-9884-70afc0d090f2`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/soy.jpg?alt=media&token=86c11b4a-c216-42b3-bb0b-4f231006b5fc`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/juices.jpg?alt=media&token=71e95c02-c4ba-4812-924d-a34807b63a58`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/juice.jpg?alt=media&token=9fb33c87-2390-4ed3-ab04-a9991a2d0272`
    ]
  },

  {
    name: '건강식품',
    products: [
      '프로바이오틱스 60정', 
      '오메가3 90캡슐', 
      '밀크씨슬 30정',
      '루테인 30캡슐', 
      '파우더 30포', 
      '홍삼정 스틱 30포',
      '마그네슘 90정',
      '비타민C 1000mg 90정',
      '글루코사민 60정',
      '홍삼'    ],
    images: [
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-afterave-essentials-2011504051-29445580.jpg?alt=media&token=da61e063-0e71-414b-a56c-44b22ba18c30`,
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-afterave-essentials-2011504051-29445585.jpg?alt=media&token=5bf230a9-5a1f-494c-8b8d-3237fbeb419b`,
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-angele-j-35172-128403.jpg?alt=media&token=85b12222-51b1-4eb5-bfa3-47db8b37dafb`,
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-correxiko-collagen-18647881-6475107.jpg?alt=media&token=8cfa4edd-9080-428a-93e2-1d465b6c0967`,
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-hoanglong0108-29060398.jpg?alt=media&token=2ad204ad-2c20-4f21-8cea-0bfaa807eccc`,
    `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/pexels-supliful-14027295.jpg?alt=media&token=5f2b5523-6b7b-4de2-b2f4-4c36935a52e6`
    ]
  },
  {
    name: '와인/위스키',
    products: [
      '프랑스 레드와인 750ml', 
      '글렌피딕 12년산 700ml', 
      '이탈리아 화이트와인 750ml',
      '발베니 12년산 700ml', 
      '칠레 카버네쇼비뇽 750ml', 
      '맥캘란 12년산 700ml',
      '스페인 까바 750ml',
      '조니워커 블랙 700ml',
    ],
    images: [
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/berrywine.jpeg?alt=media&token=c69fbc83-dded-4f4e-a60a-e6b5f8245c07`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/cherry-wine.jpg?alt=media&token=d63110f8-aa7b-4bae-88a4-7f37802a4fdc`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/spainwine.jpeg?alt=media&token=885a19d8-8c44-45fd-8f4a-2d4cc88420a3`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/wine.jpg?alt=media&token=473f7b09-42d2-4ca5-8abe-4b0ed8e4fefc`,
      `https://firebasestorage.googleapis.com/v0/b/kurly-75ac0.firebasestorage.app/o/wine2.jpg?alt=media&token=6b419b6f-8d27-4687-90a3-78060e312837`
    ]
  },
]
  
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


  export const DELIVERY_TYPES = ['무료배송', '유료배송'];
  export const PACKAGE_TYPES = ['상온', '냉장', '냉동'];

  

export const generateProducts = (count: number) => {
  const products = [];

  for (let i = 0; i < count; i++) {
    //배열에서 무작위로 값을 선택하기 위한 함수 arrayElement !!
    const product = faker.helpers.arrayElement(PRODUCT_CATEGORIES);
    const category = product.name;
    const name=faker.helpers.arrayElement(product.products);
    const description=faker.helpers.arrayElement(DESCRIPTIONS);
    const img=faker.helpers.arrayElement(product.images);
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
      category: `${category}`
    });
  }

  return products;
};
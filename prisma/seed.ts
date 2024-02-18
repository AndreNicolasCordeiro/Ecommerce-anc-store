const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const chevroletCategory = await prisma.category.create({
      data: {
        name: "Chevrolet",
        slug: "chevrolet",
        imageUrl:
          "https://utfs.io/f/5b454876-d8af-45fa-9d45-e71fdb8359e2-8c7v5x.jpg",
      },
    });

    const chevrolet = [
      {
        name: "Equinox-2025",
        slug: "equinox-2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5b454876-d8af-45fa-9d45-e71fdb8359e2-8c7v5x.jpg",
          "https://utfs.io/f/8ff0aa78-965f-4223-b049-6db0f0693761-8c7v5w.jpg",
          "https://utfs.io/f/ab8c35be-bcfa-491a-a2c7-74f7ef7a16d0-8c7v5v.jpg",
          "https://utfs.io/f/d1c9da18-be10-4a10-9b29-0582d6dfbe64-8c7v5u.jpg",
        ],
        basePrice: 800640,
        categoryId: chevroletCategory.id,
        discountPercentage: 90, // 10% discount
      },
      {
        name: "Camaro The Exorcist 2018",
        slug: "camaro-the-exorcist-2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9f56ff42-1c00-476b-882b-203bc93f5833-ccabup.jpg",
          "https://utfs.io/f/490988d4-3a54-45ae-afbb-233dc874747f-ccabuo.jpg",
          "https://utfs.io/f/d2098529-15e8-4ede-ae3e-e2f3547d0dea-ccabun.jpg",
          "https://utfs.io/f/8a7f72a2-59c8-408d-a6c7-1ca1ae631cb0-ccabum.jpg",
        ],
        basePrice: 350640,
        categoryId: chevroletCategory.id,
        discountPercentage: 35, // 10% discount
      },
      {
        name: "Blazer 2024",
        slug: "blazer-2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/7f121689-565a-4781-a4cd-2333e26cf06e-h9r8qn.jpg",
          "https://utfs.io/f/b809db38-da3e-4ea2-88b1-2c2b82e1f78d-h9r8qm.jpg",
          "https://utfs.io/f/8fb9cfb9-0d3c-479c-a0df-19fd60805eaf-h9r8ql.jpg",
          "https://utfs.io/f/362cef4c-cd75-45ce-b856-d37dba046262-h9r8qk.jpg",
        ],
        basePrice: 200640,
        categoryId: chevroletCategory.id,
        discountPercentage: 80, // 10% discount
      },
      {
        name: "Silverado 2024",
        slug: "silverado-2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/3242da1e-0651-49de-991d-619fc1b14b22-brmimo.jpg",
          "https://utfs.io/f/6971f57c-e51d-4a8a-ac70-07058feebe38-brmimp.jpg",
          "https://utfs.io/f/349a3e6c-118c-4a7d-a588-3128d3ae00f4-brmimq.jpg",
          "https://utfs.io/f/f1f65378-baf6-471f-9eaf-924d9dd0497b-brmimr.jpg",
        ],
        basePrice: 206400,
        categoryId: chevroletCategory.id,
        discountPercentage: 14, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: chevrolet,
    });

    const volkswagenCategory = await prisma.category.create({
      data: {
        name: "Volkswagen",
        slug: "volkswagen",
        imageUrl: "https://utfs.io/f/fbc704f2-241d-4d29-acc4-c08c4752f680-xqn0h5.jpg",
      },
    });

    const volkswagen = [
      {
        name: "Golf GTI 2024",
        slug: "golf-gti-2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fbc704f2-241d-4d29-acc4-c08c4752f680-xqn0h5.jpg",
          "https://utfs.io/f/4ed06f80-f565-445a-8a17-ffad46d6224d-xqn0h6.jpg",
          "https://utfs.io/f/e491519b-b11a-475d-824e-c719add4bafd-xqn0h7.jpg",
          "https://utfs.io/f/9cc4a99f-204d-4169-8fad-33076529c2e1-xqn0h8.jpg",
        ],
        basePrice: 150000,
        categoryId: volkswagenCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Atlas 2024",
        slug: "atlas-2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/f38d723e-84f5-4f5d-afe3-9d5cba129cf9-bahc84.jpg",
          "https://utfs.io/f/1b934e2a-cf35-45be-944a-1da8c5a37c1a-bahc83.jpg",
          "https://utfs.io/f/726b1b52-0323-4724-a9f9-3001466cb867-bahc82.jpg",
          "https://utfs.io/f/aca901a9-b545-4037-8f6a-a72af134b7e0-bahc81.jpg",
        ],
        basePrice: 750000,
        categoryId: volkswagenCategory.id,
        discountPercentage: 60, // 10% discount
      },
      {
        name: "Jetta 2024",
        slug: "jetta-2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/7448c619-c4ca-43ec-94e7-d2edcee61200-s833xl.jpg",
          "https://utfs.io/f/648470b5-43c5-4381-830c-6b67c90948c2-s833xk.jpg",
          "https://utfs.io/f/e71b6021-2322-4999-8d5d-3be15f77331c-s833xj.jpg",
          "https://utfs.io/f/e6f5ebd9-b929-40c0-b9da-5422c0839616-s833xi.jpg",
        ],
        basePrice: 444400,
        categoryId: volkswagenCategory.id,
        discountPercentage: 17, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: volkswagenCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: volkswagenCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: volkswagenCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: volkswagen,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

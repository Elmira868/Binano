
const catalog = document.querySelector('.catalog');
const submenu = document.querySelector('.submenu');

const toggleSubmenu = (isActive) => {
  submenu.classList.toggle('active', isActive);
};

catalog.addEventListener('mouseenter', () => toggleSubmenu(true));
catalog.addEventListener('mouseleave', () => toggleSubmenu(false));


// convert english numbers to persion numbers
const numberFaElements = () => document.querySelectorAll('.number-fa');

function toPersianDigits(str) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return str.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

function applyPersianDigits() {
  numberFaElements().forEach((element) => {
    element.textContent = toPersianDigits(element.textContent);
  });
}

const featuredProducts = [
  { id: 1, img: './asset/img/main-page/Featured-sunglasses-1.jpg', title: 'عینک مدل 1', price: 532 },
  { id: 2, img: './asset/img/main-page/Featured-sunglasses-2.webp', title: 'عینک مدل 2', price: 738 },
  { id: 3, img: './asset/img/main-page/Featured-sunglasses-3 (2).avif', title: 'عینک مدل 3', price: 342 },
  { id: 4, img: './asset/img/main-page/Featured-sunglasses-4.avif', title: 'عینک مدل 4', price: 457 },
  { id: 5, img: './asset/img/main-page/Featured-sunglasses-5.jpg', title: 'عینک مدل 5', price: 542 },
  { id: 6, img: './asset/img/main-page/Featured-sunglasses-6.avif', title: 'عینک مدل 6', price: 362 },
  { id: 7, img: './asset/img/main-page/Featured-sunglasses-7.avif', title: 'عینک مدل 7', price: 122 },
  { id: 8, img: './asset/img/main-page/Featured-sunglasses-8.avif', title: 'عینک مدل 8', price: 872 },
];

const cardContainer = document.querySelector('.card-container');

featuredProducts.forEach(product => {
  cardContainer.insertAdjacentHTML('beforeend', `
    <div class="w-60 h-auto p-2 mt-4">
      <img class="w-52 h-52" src="${product.img}" alt="${product.title}" />
      <h3 class="text-center text-base md:text-xl font-Vazir-Light mt-4 mb-4 number-fa">
        ${toPersianDigits(product.price)} تومان
      </h3>
      <span class="text-zinc-950 text-sm md:text-base mr-20 xl:mr-16 mb-4 number-fa">${product.title}</span>
      <div class="flex justify-center items-center mt-4 gap-x-2 has-[a]:text-gray-400 has-[a]:text-sm">
        <a href="#" class="hover:text-zinc-950">اضافه کردن به سبد خرید</a>
        <div class="w-[1px] h-5 bg-gray-500"></div>
        <a href="#" class="hover:text-zinc-950">جزئیات</a>
      </div>
    </div>
  `);
});

// اعمال تبدیل اعداد پس از افزودن عناصر جدید
applyPersianDigits();


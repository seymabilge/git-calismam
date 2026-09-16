// --- 1. TARİF VERİLERİ (Görseller Eklendi) ---
const recipesData = [
  // TATLILAR
  {
    id: "t1",
    category: "tatli",
    title: "Klasik Çikolatalı Brownie",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    time: "35 dk",
    servings: 4,
    ingredients: [
      { name: "Bitter Çikolata", amount: 200, unit: "g" },
      { name: "Tereyağı", amount: 100, unit: "g" },
      { name: "Toz Şeker", amount: 150, unit: "g" },
      { name: "Yumurta", amount: 3, unit: "adet" },
      { name: "Un", amount: 75, unit: "g" }
    ],
    steps: [
      "Tereyağı ve çikolatayı benmari usulü eritin.",
      "Yumurtaları şekerle krema kıvamına gelene kadar çırpın.",
      "Çikolatalı karışımı ve unu ekleyip spatula ile karıştırın.",
      "180°C fırında 22-25 dakika pişirin."
    ]
  },
  {
    id: "t2",
    category: "tatli",
    title: "San Sebastian Cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    time: "50 dk",
    servings: 6,
    ingredients: [
      { name: "Labne / Krem Peynir", amount: 600, unit: "g" },
      { name: "Krema", amount: 400, unit: "ml" },
      { name: "Pudra Şekeri", amount: 200, unit: "g" },
      { name: "Yumurta", amount: 4, unit: "adet" }
    ],
    steps: [
      "Peynir ve şekeri pürüzsüz olana kadar çırpın.",
      "Yumurtaları tek tek ekleyerek karıştırmaya devam edin.",
      "Kremayı ilave edip kalıba dökün.",
      "210°C fırında üzeri yanık karamel rengi alana kadar pişirin."
    ]
  },
  {
    id: "t3",
    category: "tatli",
    title: "Akışkan Sufle",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80",
    time: "20 dk",
    servings: 2,
    ingredients: [
      { name: "Bitter Çikolata", amount: 100, unit: "g" },
      { name: "Tereyağı", amount: 50, unit: "g" },
      { name: "Un", amount: 2, unit: "yemek kaşığı" },
      { name: "Yumurta", amount: 2, unit: "adet" }
    ],
    steps: [
      "Çikolata ve yağı eritin.",
      "Yumurta ve şekeri köpürtün, çikolatayı ekleyin.",
      "Yağlanmış sufle kaplarına paylaştırın.",
      "200°C fırında içi akışkan kalacak şekilde 8 dakika pişirin."
    ]
  },

  // YEMEKLER
  {
    id: "y1",
    category: "yemek",
    title: "Fırında Sebzeli Tavuk",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
    time: "45 dk",
    servings: 4,
    ingredients: [
      { name: "Tavuk Göğsü", amount: 600, unit: "g" },
      { name: "Patates", amount: 3, unit: "adet" },
      { name: "Zeytinyağı", amount: 4, unit: "yemek kaşığı" },
      { name: "Kekik & Biber", amount: 1, unit: "tatlı kaşığı" }
    ],
    steps: [
      "Tavukları ve patatesleri iri küpler halinde doğrayın.",
      "Zeytinyağı ve baharatlarla harmanlayıp fırın tepsisine dizin.",
      "200°C fırında patatesler yumuşayıp kızarana dek pişirin."
    ]
  },
  {
    id: "y2",
    category: "yemek",
    title: "Geleneksel Karnıyarık",
    image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=600&q=80",
    time: "60 dk",
    servings: 4,
    ingredients: [
      { name: "Patlıcan", amount: 4, unit: "adet" },
      { name: "Kıyma", amount: 300, unit: "g" },
      { name: "Soğan", amount: 1, unit: "adet" }
    ],
    steps: [
      "Patlıcanları alacalı soyup kızartın ve ortalarını yarın.",
      "Kıymalı harcı tavada kavurup patlıcanların içine doldurun.",
      "Salçalı sıcak su ekleyip fırında pişirin."
    ]
  },
  {
    id: "y3",
    category: "yemek",
    title: "Kremalı Fesleğenli Makarna",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169b?auto=format&fit=crop&w=600&q=80",
    time: "20 dk",
    servings: 2,
    ingredients: [
      { name: "Penne Makarna", amount: 250, unit: "g" },
      { name: "Sıvı Krema", amount: 200, unit: "ml" },
      { name: "Taze Fesleğen", amount: 1, unit: "avuç" }
    ],
    steps: [
      "Makarnayı haşlayın.",
      "Sarımsak ve kremayı tavada ısıtın.",
      "Makarnayı ve taze fesleğenleri ekleyip karıştırın."
    ]
  },

  // ÇORBALAR
  {
    id: "c1",
    category: "corba",
    title: "Mercimek Çorbası",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    time: "30 dk",
    servings: 4,
    ingredients: [
      { name: "Kırmızı Mercimek", amount: 1, unit: "su bardağı" },
      { name: "Havuç", amount: 1, unit: "adet" },
      { name: "Tereyağı", amount: 1, unit: "yemek kaşığı" }
    ],
    steps: [
      "Sebzeleri doğrayıp hafifçe soteleyin.",
      "Mercimek ve suyu ilave edip kaynatın.",
      "Pürüzsüz olana kadar blenderdan geçirin."
    ]
  },
  {
    id: "c2",
    category: "corba",
    title: "Kremalı Mantar Çorbası",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    time: "25 dk",
    servings: 4,
    ingredients: [
      { name: "Mantar", amount: 300, unit: "g" },
      { name: "Un", amount: 2, unit: "yemek kaşığı" },
      { name: "Krema", amount: 100, unit: "ml" }
    ],
    steps: [
      "Mantarları doğrayıp tereyağında kavurun.",
      "Unu ekleyip kokusu çıkana dek karıştırın.",
      "Suyu ve son olarak kremayı ekleyin."
    ]
  },
  {
    id: "c3",
    category: "corba",
    title: "Ezogelin Çorbası",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80",
    time: "35 dk",
    servings: 4,
    ingredients: [
      { name: "Kırmızı Mercimek", amount: 1, unit: "çay bardağı" },
      { name: "Bulgur & Pirinç", amount: 1, unit: "yemek kaşığı" },
      { name: "Kuru Nane & Salça", amount: 1, unit: "tatlı kaşığı" }
    ],
    steps: [
      "Bakliyatları haşlayın.",
      "Salçalı ve naneli tereyağ sosu hazırlayın.",
      "Sosu çorbaya ekleyip birkaç dakika kaynatın."
    ]
  }
];

// --- 2. DOM ELEMANLARI ---
const categorySection = document.getElementById("category-section");
const recipesSection = document.getElementById("recipes-section");
const recipeDetailSection = document.getElementById("recipe-detail-section");

const recipeCardsGrid = document.getElementById("recipe-cards-grid");
const recipeDetailContent = document.getElementById("recipe-detail-content");
const currentCategoryTitle = document.getElementById("current-category-title");

const btnBackCategories = document.getElementById("btn-back-categories");
const btnBackRecipes = document.getElementById("btn-back-recipes");
const categoryCards = document.querySelectorAll(".category-card");
const logoHome = document.getElementById("logo-home");
const navHome = document.getElementById("nav-home");

let activeCategory = "";

// --- 3. KADEME 2: RESİMLİ YEMEK KARTLARINI LİSTELEME ---
function showFoodList(categoryKey) {
  activeCategory = categoryKey;
  const filtered = recipesData.filter(r => r.category === categoryKey);

  currentCategoryTitle.textContent = 
    categoryKey === "tatli" ? "🍰 Tatlılar" :
    categoryKey === "yemek" ? "🍲 Yemekler" : "🥣 Çorbalar";

  recipeCardsGrid.innerHTML = filtered.map(recipe => `
    <article class="food-preview-card" onclick="showRecipeDetail('${recipe.id}')">
      <div class="food-image-wrapper">
        <img src="${recipe.image}" alt="${recipe.title}">
      </div>
      <div class="food-info">
        <h3>${recipe.title}</h3>
        <div class="food-meta">
          <span>⏱ ${recipe.time}</span>
          <span>👥 ${recipe.servings} Kişilik</span>
        </div>
        <span class="view-btn-text">Tarifi Gör →</span>
      </div>
    </article>
  `).join("");

  // Ekran geçişi
  categorySection.classList.add("hidden");
  recipeDetailSection.classList.add("hidden");
  recipesSection.classList.remove("hidden");
}

// --- 4. KADEME 3: TARİF DETAYINI GÖSTERME ---
function showRecipeDetail(recipeId) {
  const recipe = recipesData.find(r => r.id === recipeId);
  if (!recipe) return;

  recipeDetailContent.innerHTML = `
    <article class="recipe-detail-card">
      <img src="${recipe.image}" alt="${recipe.title}" class="detail-banner">
      
      <div class="detail-body">
        <div class="detail-header">
          <h2>${recipe.title}</h2>
          <div class="detail-badges">
            <span class="badge">⏱ ${recipe.time}</span>
            <span class="badge">👥 ${recipe.servings} Kişilik</span>
          </div>
        </div>

        <div class="detail-sections">
          <div>
            <h4>Malzemeler</h4>
            <ul class="ingredients-list">
              ${recipe.ingredients.map(ing => `<li><strong>${ing.name}</strong>: ${ing.amount} ${ing.unit}</li>`).join("")}
            </ul>
          </div>

          <div>
            <h4>Hazırlanışı</h4>
            <ol class="steps-list">
              ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        </div>
      </div>
    </article>
  `;

  // Ekran geçişi
  recipesSection.classList.add("hidden");
  recipeDetailSection.classList.remove("hidden");
}

// Global scope'a ekleyelim (onclick için)
window.showRecipeDetail = showRecipeDetail;

// --- 5. NAVİGASYON VE GERİ DÖNÜŞLER ---

// Kategoriye tıklama
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    showFoodList(card.dataset.category);
  });
});

// Yemek listesinden kategorilere geri dön
btnBackCategories.addEventListener("click", () => {
  recipesSection.classList.add("hidden");
  categorySection.classList.remove("hidden");
});

// Tarif detayından yemek listesine geri dön
btnBackRecipes.addEventListener("click", () => {
  recipeDetailSection.classList.add("hidden");
  recipesSection.classList.remove("hidden");
});

// Logo veya Ana Sayfa'ya basınca en başa dön
function goHome() {
  recipesSection.classList.add("hidden");
  recipeDetailSection.classList.add("hidden");
  categorySection.classList.remove("hidden");
}

logoHome.addEventListener("click", goHome);
navHome.addEventListener("click", (e) => {
  e.preventDefault();
  goHome();
});
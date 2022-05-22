// UI Controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
    }
    
// Public methods
    return {
        populateItemList: function(items) {
            let html = ''

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                            <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                            </a>
                        </li>`
            })

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item) {
            // Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block'
            // Create li element
            const li = document.createElement('li')
            // Add class
            li.className = 'collection-item'
            // Add id
            li.id = `item-${item.id}`
            // Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                            <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                            </a>`
        // Insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCaloriesInput).value = ''
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none'
        },
        getSelectors: function() {
            return UISelectors
        }
    }
})()
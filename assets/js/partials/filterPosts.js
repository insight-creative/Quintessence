function filterPosts () {
    const filterBtn = document.querySelector('.btn--filter')
    const categoryList = document.querySelector('.category-list')

    if (!document.body.contains(categoryList)) return
    
    filterBtn.addEventListener('click', event => {
      categoryList.classList.toggle('list-open')
    })
}

filterPosts()

export default filterPosts
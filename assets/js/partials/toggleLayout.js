function toggleLayout () {
    blogList = document.querySelector('.blog--list')

    if (!document.body.contains(blogList)) return

    const gridLayoutToggle = document.querySelector('.btn--grid')
    const listLayoutToggle = document.querySelector('.btn--list')
  
    gridLayoutToggle.addEventListener('click', () => {
        blogList.classList.remove('blog--list')
        blogList.classList.add('blog--grid')
        listLayoutToggle.classList.remove('btn--active')
        gridLayoutToggle.classList.add('btn--active')
    })
  
    listLayoutToggle.addEventListener('click', () => {
        blogList.classList.remove('blog--grid')
        blogList.classList.add('blog--list')
        gridLayoutToggle.classList.remove('btn--active')
        listLayoutToggle.classList.add('btn--active')
    })
    
}

toggleLayout()

export default toggleLayout
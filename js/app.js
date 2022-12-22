const group = document.getElementsByClassName('group')

let activeIndex = 0

const prevSlider = () => {
    const active = activeIndex - 1 >= 0 ? activeIndex - 1 : group.length - 1

    const activeGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          beforeGroup = document.querySelector(`[data-index="${active}"]`)

    // set the current active into before to move it to the right
    activeGroup.dataset.status = 'before'

    // set the unknown data status to 'after' after a short timeout then...
    beforeGroup.dataset.status = 'after'

    setTimeout(() => {
        // set the after to active for smooth transition
        beforeGroup.dataset.status = 'active'
        activeIndex = active
    })
}

const nextSlider = () => {
    const active = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0

    const activeGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${active}"]`)

    // set the current active into before to move it to the left
    activeGroup.dataset.status = 'after'

    // set the unknown data status to 'before' and then after a short timeout 
    nextGroup.dataset.status = 'before'

    setTimeout(() => {
        // set the after into active for smooth transition
        nextGroup.dataset.status = 'active'
        activeIndex = active
    })
}
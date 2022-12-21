const group = document.getElementsByClassName('group')

let activeIndex = 0

const prevSlider = () => {
    const active = activeIndex - 1 >= 0 ? activeIndex - 1 : group.length - 1

    const activeGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          beforeGroup = document.querySelector(`[data-index="${active}"]`)

    activeGroup.dataset.status = 'before'

    beforeGroup.dataset.status = 'after'
    setTimeout(() => {
        beforeGroup.dataset.status = 'active'
        activeIndex = active
    })

    activeIndex = active
    console.log(active)
}

const nextSlider = () => {
    const active = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0

    const activeGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${active}"]`)

    activeGroup.dataset.status = 'after'

    nextGroup.dataset.status = 'before'
    setTimeout(() => {
        nextGroup.dataset.status = 'active'
        activeIndex = active
    })

    console.log(active)
}
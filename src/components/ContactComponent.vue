<template>

        <v-container>
            <div>Hello, this is a CONTACT page.</div>
            <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
        </v-container>


</template>

<script>
  import gsap from 'gsap'

  export default {
    name: 'Contact',

    data: () => ({
        beforeEnter: (el) => {
            console.log('before enter - set intial state')
            el.style.transform = 'translateY(-60px)'
            el.style.opacity = 0
            },
        enter: (el, done) => {
            console.log('starting to enter - make transition')
            gsap.to(el, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'bounce.out',
                onComplete: done
            })
        }
    }),
    // mounted: function () {
    //         console.log('Called before mount.', Object.keys(this))
    //         console.log(this)
    //         this.$el.style.transform = 'translateY(-60px)'
    //         this.$el.style.opacity = 0
    //     }

    // beforeEnter: (el) => {
    //   console.log('before enter - set intial state')
    //   el.style.transform = 'translateY(-60px)'
    //   el.style.opacity = 0
    // },

    // enter: (el, done) => {
    //   console.log('starting to enter - make transition')
    //   gsap.to(el, {
    //     duration: 1,
    //     y: 0,
    //     opacity: 1,
    //     ease: 'bounce.out',
    //     onComplete: done
    //   })
    // }

        // <transition
        // appear
        // @before-enter="beforeEnter"
        // @enter="enter"
        // >   
        // </transition>
  }
</script>

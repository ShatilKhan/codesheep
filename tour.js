window.addEventListener('DOMContentLoaded', (event) => {
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            }
        },
        useModalOverlay: true
    });

    tour.addStep({
        id: 'step1',
        text: 'string vars are used to store text variables',
        attachTo: {
            element: '#step1',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });
    tour.addStep({
        id: 'step2',
        text: 'This is the second step',
        attachTo: {
            element: '#step2',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step3',
        text: 'This is the third step',
        attachTo: {
            element: '#step3',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step4',
        text: 'This is the fourth step',
        attachTo: {
            element: '#step4',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step5',
        text: 'This is the fifth step',
        attachTo: {
            element: '#step5',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step6',
        text: 'This is the sixth step',
        attachTo: {
            element: '#step6',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'End tour',
                action: tour.cancel
            }
        ]
    });
    document.getElementById('start-tour').addEventListener('click', () => {
        tour.start();
    });
});
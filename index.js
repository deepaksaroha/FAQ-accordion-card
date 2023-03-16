window.onload = () => {

    const faqs = [{
        q: 'How many team members can I invite?',
        a: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
        q: 'What is the maximum file upload size?',
        a: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        q: 'How do I reset my password?',
        a: 'Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.'
    },
    {
        q: 'Can I cancel my subscription?',
        a: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
        q: 'Do you provide additional support?',
        a: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }]
    
    const get1Faq = (q, a) => {
        const topDiv = document.createElement('div');
        const queDiv = document.createElement('div');
        queDiv.classList.add('que');

        const queP = document.createElement('p');
        queP.innerText = q;
        queDiv.appendChild(queP);

        const aroDiv = document.createElement('div');
        const aroImg = document.createElement('img');
        aroImg.setAttribute('src', './images/icon-arrow-down.svg');
        aroDiv.appendChild(aroImg);
        queDiv.appendChild(aroDiv);
        topDiv.appendChild(queDiv);
        
        const ansP = document.createElement('p');
        ansP.innerText = a;
        ansP.classList.add('ans', 'anshid');
        topDiv.appendChild(ansP);

        queDiv.addEventListener('click', ()=>{
            if(ansP.classList.contains('anshid')){
                ansP.classList.remove('anshid');
                ansP.classList.add('ansvis');
                aroImg.classList.add('arup');
                queP.classList.add('que-open');
            }else{                
                ansP.classList.remove('ansvis');
                ansP.classList.add('anshid');
                aroImg.classList.remove('arup');
                queP.classList.remove('que-open');
            }
        })
        
        return topDiv;
    }

    const faqSec = document.getElementById('faqsec');
    for(let i=0; i<faqs.length; i++){
        let faq = get1Faq(faqs[i].q, faqs[i].a);
        faqSec.appendChild(faq);
        const hr = document.createElement('hr');
        faqSec.appendChild(hr);
    }

}
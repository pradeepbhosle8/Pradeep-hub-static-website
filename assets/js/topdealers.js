fetch('topdealrs.json')
.then((res) => {
    console.log(res);
    return res.json();
    
}).then((data)=>{
    let result = '';
		
    data.forEach( function(post) {

        // statements
        result += `
        
        <div class="listing-item-content">
            <div class="banner-image">
                <img src="${post.img}" alt=""
                    class="listing-img">
            </div>
            <div class="banner-content">
                <h3 class="banner-content-title">${post.title}</h3>
                <!-- <div class="number-listing">4</div> -->
                <a href="" class="link-item">
                    <i class="fas fa-arrow-right"></i>
                </a>
                
            </div>
            <a href="" class="link-item-overlay"></a>
        </div>
   
        `;
        
    });
    document.querySelector('.items').innerHTML = result;
})
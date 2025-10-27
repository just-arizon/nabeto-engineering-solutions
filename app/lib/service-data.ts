// app/lib/service-data.ts
export const designedProjects = [ 
    { 
        id: 1, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 2, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 3, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    ];
export const procurementServices = [ 
    { 
        id: 1, title: 'Igando Petroleum...', 
        section:'procurement-management',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 2, title: 'Igando Petroleum...', 
                section:'procurement-management',

        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 3, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    ];
export const constructionServices = [ 
    { 
        id: 1, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 2, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    { 
        id: 3, title: 'Igando Petroleum...', 
        section:'engineering-design',
        image:'',
        location:'',
        description:'',
        client:'',
        value: '',
        duration: '',
        status:''
    }, 
    ];

    export const projectPool = [
  ...designedProjects,
  ...procurementServices,
  ...constructionServices,
] as const;
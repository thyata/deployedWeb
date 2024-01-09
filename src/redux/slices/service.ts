import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { DateInput } from '@fullcalendar/common';
// utils
import axios from '../../utils/axios';
// @types
import { IServiceState, ICalendarEvent } from '../../@types/calendar';

// ----------------------------------------------------------------------

const initialState: IServiceState = {
  isLoading: false,
  error: null,
  services: [],
  servicesPage: {
    content: [],
    pageable: {
      sort: {
          empty: false,
          sorted: false,
          unsorted: false
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false
  },
  totalElements: 0,
  totalPages: 0,
  last: false,
  size: 0,
  number: 0,
  sort: {
      empty: false,
      sorted: false,
      unsorted: false
  },
  numberOfElements: 0,
  first: false,
  empty: false
  },
  openModal: false,
  selectedServiceId: null,
  selectedRange: null,
};

export type Appointment = {
  id: number | string,
  patient: Patient,
  status: string,
  date: string,
  createdAt: string,
  selectedFee: {
      id: number,
      provider: {
          id: number,
          username: string,
          name: string,
          nameAr: string,
          status: string,
          userRole: string
      },
      fee: {
          id: number,
          name: string,
          service: {
              id: number,
              name: string,
              status: string
          },
          reference: string,
          defaultPrice: number,
          basePrice: number,
          type: string,
          category: {
              id: number,
              name: string,
              subCategories: []
          },
          providers: [
              {
                  id: number,
                  user: {
                      id: number,
                      username: string,
                      name: string,
                      nameAr: string,
                      status: string,
                      userRole: string
                  },
                  basePrice: number,
                  priceVariations: []
              }
          ]
      },
      price: number,
      priceVariation: {
          id: number,
          name: string,
          price: number
      }
  },
  title?: string
}

type Patient = {
  age: string,
  birthDate: string,
  doctors: [],
  fullName: string,
  gender: string,
  id: number,
  identification: string,
  lastUpdate: string,
  phoneNumber: string,
  title?: string,
};

type Service = {
  id: number,
  name: string,
  subServices: [],
  team: [],
  status: string
}

type Category = {
  id: number,
  name: string,
  subCategories: [],
}

type Act = {
  id: number,
  name: string,
  service: Service,
  reference: string,
  defaultPrice: number,
  basePrice: number,
  type: string,
  category: Category,
  providers: [
    {
      id: number,
      user: {
          id: number,
          username: string,
          name: string,
          nameAr: string,
          status: string,
          userRole: string
      },
      basePrice: number,
      priceVariations: [
          {
              id: number,
              name: string,
              price: number
          }
      ]
    }
  ]
}

type Provider = {
  id: number,
  username: string,
  password: string,
  name: string,
  nameAr: string,
  status: string,
  userRole: string
}

type ServiceSubmit = {
    id: string | number | null | undefined,
    name: string,
    subServices?: Array<ServiceSubmit>,
    team: Array<Team>,
    status: string
}

type Team = {
    id?: number | string | null,
    username?: string,
    name: string,
    nameAr?: string,
    status?: string,
    userRole?: string
}

let searchServices: Array<Patient> = []

let stateGetServices: Array<Service> = []

let stateGetCategories: Array<Category> = []

let searchActByServiceIdAndCategoryId: Array<Act> = []

let stateGetProviders: Array<Provider> = []

let searchActsArray: Array<Act> = []

let searchAppointment: Array<Appointment> = []

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getServicesSuccess(state, action) {
      state.isLoading = false;
      state.services = action.payload;
    },

    // GET EVENTSPAGE
    getServicesPageSuccess(state, action) {
      state.isLoading = false;
      state.services = action.payload;
    },

    // CREATE EVENT
    createServiceSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.services = [...state.services, newEvent];
    },

    // UPDATE EVENT
    updateServiceSuccess(state, action) {
      state.isLoading = false;
      state.services = state.services.map((service) => {
        if (service.id === action.payload.id) {
          return action.payload;
        }
        return service;
      });
    },

    // Search Service
    searchServiceSuccess(state, action) {
      searchServices = action.payload;
      state.isLoading = false;
    },

    // Search Appointment
    searchAppointmentSuccess(state, action) {
      searchAppointment = action.payload;
      state.isLoading = false;
    },

    searchActSuccess(state, action) {
      searchActsArray = action.payload;
      state.isLoading = false;
    },

    // service Service
    getServiceSuccess(state, action) {
      stateGetServices = action.payload;
      state.isLoading = false;
    },

    getCategoriesuccess(state, action) {
      stateGetCategories = action.payload;
      state.isLoading = false;
    },

    searchActByServiceIdAndCategoryIduccess(state, action) {
      searchActByServiceIdAndCategoryId = action.payload;
      state.isLoading = false;
    },

    getProviderssuccess(state, action) {
      stateGetProviders = action.payload;
      state.isLoading = false;
    },

    // DELETE EVENT
    deleteServiceSuccess(state, action) {
      const serviceId = action.payload;
      state.services = state.services.filter((service) => service.id !== serviceId);
    },

    // SELECT EVENT
    selectService(state, action) {
      const serviceId = action.payload;
      state.openModal = true;
      state.selectedServiceId = serviceId;
    },

    // SELECT RANGE
    selectRange(state, action) {
      const { start, end } = action.payload;
      state.openModal = true;
      state.selectedRange = { start, end };
    },

    // OPEN MODAL
    onOpenModal(state) {
      state.openModal = true;
    },

    // CLOSE MODAL
    onCloseModal(state) {
      state.openModal = false;
      state.selectedServiceId = null;
      state.selectedRange = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { onOpenModal, onCloseModal, selectService, selectRange } = slice.actions;

export const searchService = searchServices;

export const getService = stateGetServices;

// ----------------------------------------------------------------------

export function getEvents(date: {
  from?: string,
  to?: string
 },
 event?: {
  status?: string,
  providerId?: number,
  categoryId?: number,
  serviceId?: number
}) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    // try {
    //   const response = await axios.get('/api/calendar/events');
    //   console.log(response.data.events)
    //   dispatch(slice.actions.getEventsSuccess(response.data.events));
    // } catch (error) {
    //   dispatch(slice.actions.hasError(error));
    // }

    try {
      console.log(event)
      let response
      if(event === undefined || (event?.status && event?.status !== 'All')) response = await axios.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId) response = await axios.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId === undefined) response = await axios.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId === undefined && event.serviceId) response = await axios.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId === undefined && event.categoryId && event.serviceId) response = await axios.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status === undefined && event.providerId && event.categoryId && event.serviceId) response = await axios.get(`/hospital/appointments/?page=0&size=1000&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('service')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && event.serviceId) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('category & service')
      }
      else if(event.status === undefined && event.providerId && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&categoryId=${event?.categoryId}&providerId=${event?.providerId}&from=${date.from}&to=${date.to}`);
        console.log('category & provider')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&categoryId=${event?.categoryId}&from=${date.from}&to=${date.to}`);
        console.log('category')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&providerId=${event?.providerId}&from=${date.from}&to=${date.to}`);
        console.log('provider')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await axios.get(`/hospital/services/?page=0&size=1000&providerId=${event?.providerId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('provider & service')
      }
      else response = await axios.get(`/hospital/services/?page=0&size=1000&from=${date.from}&to=${date.to}`);
      // const obj = {
      //   title: response.data.content.patient.fullName,
      //   start_date: response.data.content.date
      // }
      // eslint-disable-next-line no-return-assign
      const data =response.data.content.forEach((r: Appointment) => r.title = r.patient.fullName)
      console.log(response.data.content)
      dispatch(slice.actions.getServicesSuccess(response.data.content));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getServicesPage(
  page: number = 0){
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get(`/hospital/services/?page=${page}&size=5`);
      // eslint-disable-next-line no-return-assign
      const data =response.data.content.forEach((r: Appointment) => r.title = r.patient.fullName)
      console.log(response.data)
      dispatch(slice.actions.getServicesPageSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}


// ----------------------------------------------------------------------

// export function getServices() {
//   return async (dispatch: Dispatch) => {
//     // dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get('/hospital/services/?page=0&size=50');
//       // console.log(response.data.content)
//       stateGetServices = [...response.data.content]
//       dispatch(slice.actions.getServiceSuccess(response.data.content));
//       return stateGetServices;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//       return [];
//     }
//   };
// }

// ----------------------------------------------------------------------

// export function getCategories(serviceId = 0) {
//   return async (dispatch: Dispatch) => {
//     // dispatch(slice.actions.startLoading());
//     try {
//       let response
//       if (serviceId === 0){
//         response = await axios.get('/hospital/categories/?page=0&size=50');
//       }else response = await axios.get(`/hospital/categories/?page=0&size=50&serviceId=${serviceId}`);
//       console.log(response.data.content)
//       stateGetCategories = [...response.data.content]
//       dispatch(slice.actions.getCategoriesuccess(response.data.content));
//       return stateGetCategories;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//       return [];
//     }
//   };
// }

// ----------------------------------------------------------------------

// export function searchPatients(search: string) {
//   return async (dispatch: Dispatch) => {
//     // dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.get(`/hospital/patients/?page=0&size=5&search=${search}`);
//       // console.log(response.data.content)
//       searchEvents = [...response.data.content]
//       dispatch(slice.actions.searchEventSuccess(response.data.content));
//       return searchEvents;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//       return [];
//     }
//   };
// }

// ----------------------------------------------------------------------

// export function searchservices(search: string, size: number = 50) {
//   return async (dispatch: Dispatch) => {
//     // dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.get(`/hospital/services/?page=0&size=${size}&search=${search}`);
//       if(size !== 5){
//         response.data.content.forEach((r: Appointment) => {
//           r.title = r.patient.fullName
//         });
//         dispatch(slice.actions.getEventsSuccess(response.data.content));
//       }else{
//         response.data.content.forEach((r: Appointment) => {
//           r.title = r.patient.fullName
//         });
//         dispatch(slice.actions.getEventsPageSuccess(response.data));
//       }
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// ----------------------------------------------------------------------

export function searchActs(search: string) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get(`/hospital/fees/?page=0&size=5&search=${search}`);
      // console.log(response.data.content)
      searchActsArray = [...response.data.content]
      dispatch(slice.actions.searchActSuccess(response.data.content));
      return searchActsArray;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}


// ----------------------------------------------------------------------

export function searchActByserviceIdAndCategoryId(serviceId: number, categoryId: number) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get(`/hospital/fees/?page=0&size=5&serviceId=${serviceId}&categoryId=${categoryId}`);
      // console.log(response.data.content)
      searchActByServiceIdAndCategoryId = [...response.data.content]
      dispatch(slice.actions.searchActByServiceIdAndCategoryIduccess(response.data.content));
      return searchActByServiceIdAndCategoryId;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}

// ----------------------------------------------------------------------

export function getProviders() {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get(`/users/?page=0&size=50`);
      // console.log(response.data.content)
      stateGetProviders = [...response.data.content]
      dispatch(slice.actions.getProviderssuccess(response.data.content));
      return stateGetProviders;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}

// ----------------------------------------------------------------------

export function createService(newService: ServiceSubmit) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/hospital/services/', newService);
      const data = {...response.data}
      console.log(data)
      dispatch(slice.actions.createServiceSuccess(data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateService(
  // event: EventSubmit
  service: Partial<{
    // status: string;
    id: string | number | null,
    nom: string
  }>
) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    console.log(service.id)
    console.log(service)
    try {
      const response = await axios.post('/hospital/services/', 
        // eventId,
        service,
      );
      const data = {...response.data}
      dispatch(slice.actions.updateServiceSuccess(data));
      console.log(response.data)
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteService(servicetId: string | number) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post(`/hospital/services/${servicetId}/delete`);
      dispatch(slice.actions.deleteServiceSuccess(servicetId));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

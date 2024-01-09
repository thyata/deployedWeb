import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { DateInput } from '@fullcalendar/common';
// utils
import axios from '../../utils/axios';
import newAxiosInstance from '../../utils/newAxios';
// @types
import { ICalendarState, ICalendarEvent } from '../../@types/calendar';

// ----------------------------------------------------------------------

const initialState: ICalendarState = {
  isLoading: false,
  error: null,
  events: [],
  eventsPage: {
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
  selectedEventId: null,
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

type EventSubmit = {
  id?: number | string | null,
  patient: {
    id: number
  },
  status: string,
  date?: string | DateInput | null,
  selectedFee: {
    provider?: {
      id: number
    },
    fee: {
      id: number
    },
    price: string
  }
}

let searchEvents: Array<Patient> = []

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
    getEventsSuccess(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },

    // GET EVENTSPAGE
    getEventsPageSuccess(state, action) {
      state.isLoading = false;
      state.eventsPage = action.payload;
    },

    // CREATE EVENT
    createEventSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },

    // UPDATE EVENT
    updateEventSuccess(state, action) {
      state.isLoading = false;
      state.events = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });
    },

    // Search EVENT
    searchEventSuccess(state, action) {
      searchEvents = action.payload;
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

    // service EVENT
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
    deleteEventSuccess(state, action) {
      const eventId = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
    },

    // SELECT EVENT
    selectEvent(state, action) {
      const eventId = action.payload;
      state.openModal = true;
      state.selectedEventId = eventId;
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
      state.selectedEventId = null;
      state.selectedRange = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { onOpenModal, onCloseModal, selectEvent, selectRange } = slice.actions;

export const searchEvent = searchEvents;

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
      let response ;
      // let response=`/hospital/appointments/`;
      // if(event?.status) response+=`&status=${event.status}`
      // if(event?.providerId) response+=`&providerId=${event.providerId}`
      // if(event?.status) response+=`&status=${event.status}`
      // if(event?.status) response+=`&status=${event.status}`
      if(event === undefined || (event?.status && event?.status !== 'All')) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId === undefined) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId && event.categoryId === undefined && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&providerId=${event?.providerId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status && event.providerId === undefined && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&status=${event?.status}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status === undefined && event.providerId && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('service')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('category & service')
      }
      else if(event.status === undefined && event.providerId && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&categoryId=${event?.categoryId}&providerId=${event?.providerId}&from=${date.from}&to=${date.to}`);
        console.log('category & provider')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&categoryId=${event?.categoryId}&from=${date.from}&to=${date.to}`);
        console.log('category')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&providerId=${event?.providerId}&from=${date.from}&to=${date.to}`);
        console.log('provider')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&providerId=${event?.providerId}&serviceId=${event?.serviceId}&from=${date.from}&to=${date.to}`);
        console.log('provider & service')
      }
      else response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=1000&from=${date.from}&to=${date.to}`);
      // const obj = {
      //   title: response.data.content.patient.fullName,
      //   start_date: response.data.content.date
      // }
      // eslint-disable-next-line no-return-assign
      const data =response.data.content.forEach((r: Appointment) => r.title = r.patient.fullName)
      console.log(response.data.content)
      dispatch(slice.actions.getEventsSuccess(response.data.content));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getEventsPage(event?: {
    status?: string,
    providerId?: number,
    categoryId?: number,
    serviceId?: number
  },
  // search?: string,
  page: number = 0){
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      console.log('here')
      let response
      // if(search === 'All' || search === undefined) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5`);
      // else response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${search}`);
      if(event === undefined || (event?.status && event?.status !== 'All')) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${event?.status}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}`);
      else if(event.status && event.providerId && event.categoryId && event.serviceId === undefined) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${event?.status}&providerId=${event?.providerId}&categoryId=${event?.categoryId}`);
      else if(event.status && event.providerId && event.categoryId === undefined && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${event?.status}&providerId=${event?.providerId}&serviceId=${event?.serviceId}`);
      else if(event.status && event.providerId === undefined && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&status=${event?.status}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}`);
      else if(event.status === undefined && event.providerId && event.categoryId && event.serviceId) response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&providerId=${event?.providerId}&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}`);
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&serviceId=${event?.serviceId}`);
        console.log('service')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&categoryId=${event?.categoryId}&serviceId=${event?.serviceId}`);
        console.log('category & service')
      }
      else if(event.status === undefined && event.providerId && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&categoryId=${event?.categoryId}&providerId=${event?.providerId}`);
        console.log('category & provider')
      }
      else if(event.status === undefined && (event.providerId === undefined || event.providerId === 0) && event.categoryId && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&categoryId=${event?.categoryId}`);
        console.log('category')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && (event.serviceId === undefined || event.serviceId === 0)) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&providerId=${event?.providerId}`);
        console.log('provider')
      }
      else if(event.status === undefined && event.providerId && (event.categoryId === undefined || event.categoryId === 0) && event.serviceId) {
        response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5&providerId=${event?.providerId}&serviceId=${event?.serviceId}`);
        console.log('provider & service')
      }
      else response = await newAxiosInstance.get(`/hospital/appointments/?page=${page}&size=5`);
      // eslint-disable-next-line no-return-assign
      const data =response.data.content.forEach((r: Appointment) => r.title = r.patient.fullName)
      console.log(response.data)
      dispatch(slice.actions.getEventsPageSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}


// ----------------------------------------------------------------------

export function getServices() {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());
    try {
      const response = await newAxiosInstance.get('/hospital/services/?page=0&size=50');
      // console.log(response.data.content)
      stateGetServices = [...response.data.content]
      dispatch(slice.actions.getServiceSuccess(response.data.content));
      return stateGetServices;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}

// ----------------------------------------------------------------------

export function getCategories(serviceId = 0) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());
    try {
      let response
      if (serviceId === 0){
        response = await newAxiosInstance.get('/hospital/categories/?page=0&size=50');
      }else response = await newAxiosInstance.get(`/hospital/categories/?page=0&size=50&serviceId=${serviceId}`);
      console.log(response.data.content)
      stateGetCategories = [...response.data.content]
      dispatch(slice.actions.getCategoriesuccess(response.data.content));
      return stateGetCategories;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}

// ----------------------------------------------------------------------

export function searchPatients(search: string) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await newAxiosInstance.get(`/hospital/patients/?page=0&size=5&search=${search}`);
      // console.log(response.data.content)
      searchEvents = [...response.data.content]
      dispatch(slice.actions.searchEventSuccess(response.data.content));
      return searchEvents;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return [];
    }
  };
}

// ----------------------------------------------------------------------

export function searchAppointments(search: string, size: number = 50) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await newAxiosInstance.get(`/hospital/appointments/?page=0&size=${size}&search=${search}`);
      if(size !== 5){
        response.data.content.forEach((r: Appointment) => {
          r.title = r.patient.fullName
        });
        dispatch(slice.actions.getEventsSuccess(response.data.content));
      }else{
        response.data.content.forEach((r: Appointment) => {
          r.title = r.patient.fullName
        });
        dispatch(slice.actions.getEventsPageSuccess(response.data));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function searchActs(search: string) {
  return async (dispatch: Dispatch) => {
    // dispatch(slice.actions.startLoading());

    try {
      const response = await newAxiosInstance.get(`/hospital/fees/?page=0&size=5&search=${search}`);
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
      const response = await newAxiosInstance.get(`/hospital/fees/?page=0&size=5&serviceId=${serviceId}&categoryId=${categoryId}`);
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
      const response = await newAxiosInstance.get(`/users/?page=0&size=50`);
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

export function createEvent(newEvent: EventSubmit, fullName: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await newAxiosInstance.post('/hospital/appointments/', newEvent);
      const data = {...response.data, title: fullName}
      console.log(data)
      dispatch(slice.actions.createEventSuccess(data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateEvent(
  // event: EventSubmit
  event: Partial<{
    // status: string;
    id: string | number | null,
    date: DateInput | string | number | null;
  }>,
  fullName?: string
) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    console.log(event.id)
    console.log(event)
    try {
      const response = await newAxiosInstance.post('/hospital/appointments/', 
        // eventId,
        event,
      );
      const data = {...response.data, title: fullName}
      dispatch(slice.actions.updateEventSuccess(data));
      console.log(response.data)
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteEvent(eventId: string | number) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await newAxiosInstance.post(`/hospital/appointments/${eventId}/delete`);
      dispatch(slice.actions.deleteEventSuccess(eventId));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

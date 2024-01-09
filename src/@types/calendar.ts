import { EventInput } from '@fullcalendar/common';

// ----------------------------------------------------------------------
export type Appointment = {
  id: string,
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

export type Patient = {
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

export type Service = {
  id: number,
  name: string,
  subServices: [],
  team: [],
  status: string
}

export type Category = {
  id: number,
  name: string,
  subCategories: [],
}

export type Act = {
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

export type EventSubmit = {
  id?: number | string | null,
  patient: {
    id: number
  },
  status: string,
  date: string | Date | null,
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
export type EventPage = {
  content: Appointment[],
  pageable: {
      sort: {
          empty: boolean,
          sorted: boolean,
          unsorted: boolean
      },
      offset: number,
      pageNumber: number,
      pageSize: number,
      paged: boolean,
      unpaged: boolean
  },
  totalElements: number,
  totalPages: number,
  last: boolean,
  size: number,
  number: number,
  sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
  },
  numberOfElements: number,
  first: boolean,
  empty: boolean
}
export type ICalendarViewValue = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';

export type ICalendarEvent = {
  title: string;
  description: string;
  textColor: string;
  allDay: boolean;
  start: Date | string | null;
  end: Date | string | null;
};

export type ICalendarState = {
  isLoading: boolean;
  error: Error | string | null;
  events: EventInput[];
  eventsPage: EventPage;
  openModal: boolean;
  selectedEventId?: string | number | null;
  selectedRange: {
    start: Date;
    end: Date;
  } | null;
};

export type IServiceState = {
  isLoading: boolean;
  error: Error | string | null;
  services: EventInput[];
  servicesPage: EventPage;
  openModal: boolean;
  selectedServiceId?: string | number | null;
  selectedRange: {
    start: Date;
    end: Date;
  } | null;
} 

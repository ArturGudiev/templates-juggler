import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'DB insert user to table',
        content: `
    insert into users (name,department_id,post,phone_number,role,is_active,created,deleted,password_hash) values ('Employee $$', 3, 'Работник','79119618896', 'EMPLOYEE', true,'2026-03-20 06:08:37.001349-07',false,'$2b$12$u7BtcnDUg2nZFpIn8G6FX.SfeWWCs/x.G7BQKEi6qPoFjwi3
fGQHG');
`
    },
    {
        title: 'Incident create post request body',
        content: `
   {"address":{"value":"г Владикавказ, ул Шамиля Джикаева, д 3А","unrestricted_value":"362020, респ Северная Осетия - Алания, г Владикавказ, ул Шамиля Джикаева, д 3А","postal_code":"362020","country":"Россия","country_iso_code":"RU","federal_district":"Северо-Кавказский","region_fias_id":"de459e9c-2933-4923-83d1-9c64cfd7a817","region_kladr_id":"1500000000000","region_iso_code":"RU-SE","region_with_type":"респ Северная Осетия - Алания","region_type":"респ","region_type_full":"республика","region":"Северная Осетия - Алания","area_fias_id":null,"area_kladr_id":null,"area_with_type":null,"area_type":null,"area_type_full":null,"area":null,"sub_area_fias_id":null,"sub_area_kladr_id":null,"sub_area_with_type":null,"sub_area_type":null,"sub_area_type_full":null,"sub_area":null,"city_fias_id":"20ea2341-4f49-4c5c-a9dc-a54688c8cc61","city_kladr_id":"1500000100000","city_with_type":"г Владикавказ","city_type":"г","city_type_full":"город","city":"Владикавказ","city_area":null,"city_district_fias_id":null,"city_district_kladr_id":null,"city_district_with_type":null,"city_district_type":null,"city_district_type_full":null,"city_district":null,"settlement_fias_id":null,"settlement_kladr_id":null,"settlement_with_type":null,"settlement_type":null,"settlement_type_full":null,"settlement":null,"street_fias_id":"a3beb0e5-4115-4111-b9b6-b758bcb45b03","street_kladr_id":"15000001000055600","street_with_type":"ул Шамиля Джикаева","street_type":"ул","street_type_full":"улица","street":"Шамиля Джикаева","stead_fias_id":null,"stead_kladr_id":null,"stead_type":null,"stead_type_full":null,"stead":null,"house_fias_id":"bf780dfd-4b39-4e8e-9292-6778478be266","house_kladr_id":"1500000100005560019","house_type":"д","house_type_full":"дом","house":"3А","block_type":null,"block_type_full":null,"block":null,"entrance":null,"floor":null,"flat_fias_id":null,"flat_type":null,"flat_type_full":null,"flat":null,"room_fias_id":null,"room_type":null,"room_type_full":null,"room":null,"postal_box":null,"fias_id":"bf780dfd-4b39-4e8e-9292-6778478be266","fias_code":null,"fias_level":"8","kladr_id":"1500000100005560019","geoname_id":"473249","capital_marker":"2","okato":"90401000000","oktmo":"90701000001","tax_office":"1500","tax_office_legal":"1500","history_values":null,"geo_lat":43.02818252054931,"geo_lon":44.64592695236207,"qc_geo":"0","fias_actuality_state":"0","unparsed_parts":null},"name":"Automatically created incident","description":"asdasd","predicted_elimination_date":null,"incident_organizations":[{"organization_id":3,"severity":null,"incident_category_id":31,"incident_responsible_persons":[]}],"callbacks":[]}
`
    },
     {
        title: 'Incident create post request body with 2 organizations (Gaz Gup)',
        content: `
    {"address":{"value":"г Владикавказ, ул Шамиля Джикаева, д 5","unrestricted_value":"362020, респ Северная Осетия - Алания, г Владикавказ, ул Шамиля Джикаева, д 5","postal_code":"362020","country":"Россия","federal_district":"Северо-Кавказский","region_type":"респ","region":"Северная Осетия - Алания","area_type":null,"area":null,"city_type":"г","city":"Владикавказ","city_area":null,"city_district_type":null,"city_district":null,"settlement_type":null,"settlement":null,"street_type":"ул","street":"Шамиля Джикаева","stead_cadnum":null,"stead_type":null,"stead":null,"house_cadnum":null,"house_type":"д","house":"5","block_type":null,"block":null,"entrance":null,"geoname_id":"473249","geo_lat":"43.0291778","geo_lon":"44.6469009","qc_geo":"0","qc_complete":null,"qc_house":null,"qc":null,"unparsed_parts":null},"name":"a new incident","description":"asdasd","predicted_elimination_date":null,"incident_organizations":[{"organization_id":3,"severity":"Минимальная","incident_category_id":36,"incident_responsible_persons":null},{"organization_id":2,"severity":null,"incident_category_id":3,"incident_responsible_persons":null}],"callbacks":[]}
`   },
    {
        title: 'Get state',
        content: `
        import 'package:provider/provider.dart';
        // import '../providers/app_state_provider.dart';

    final appStateProvider = context.read<AppStateProvider>();
    final state = appStateProvider.state;

    // ... 

    AppStateProvider get _appState => context.read<AppStateProvider>();

        `
    },
    {
        title: 'Call method in state',
        content: `
  import '../providers/app_state_provider.dart';

    final appStateProvider = context.read<AppStateProvider>();
    appStateProvider.setBottomMenuItemWithData(
        SelectedPanel.incident,
        { "incident": incident, "showBackIcon": showBackIcon }
    );
        `
    },
    {
        title: 'Inject repo in component with state',
        content: `
  class _IncidentPanelState extends State<AddIncidentPanel> {

    final addressesRepository = getIt<AddressesRepository>();
        `
    },
    {
        title: 'Outline button with 2 icons',
        content: `
        final addManagementOrgButton = OutlinedButton(
      onPressed: () {
        setState(() {
          managementOrganization = const IncidentOrganization(
            organization: null,
            category: null,
          );
        });
      },
      style: OutlinedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 0),
        fixedSize: const Size.fromHeight(28),
        minimumSize: Size.zero,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        side: BorderSide(color: const Color(0xFFD9D0FF), width: 1),
      ),

      child: Row(
        mainAxisSize: MainAxisSize.min,
        // Чтобы кнопка не растягивалась на весь экран
        children: [
          SvgPicture.asset(
            'assets/images/icons/plus.svg',
            width: 12,
            height: 12,
            colorFilter: const ColorFilter.mode(
              Color(0xFF8A76DF),
              BlendMode.srcIn,
            ),
          ),
          const SizedBox(width: 8), // Отступ между иконками
          SvgPicture.asset(
            'assets/images/icons/management-organization.svg',
            width: 12,
            height: 12,
            colorFilter: const ColorFilter.mode(
              Color(0xFF8A76DF),
              BlendMode.srcIn,
            ),
          ),
          const SizedBox(width: 8), // Отступ между иконками и текстом
          const Text(
            'Добавить управляющую организацию',
            style: TextStyle(
              fontWeight: FontWeight.w500,
              fontSize: 10,
              color: Color(0xFF8A76DF),
            ),
          ),
        ],
      ),
    )`
    },
     {
        title: 'Outline button with 1 icon',
        content: `
    final addCallbackButton = OutlinedButton.icon(
      onPressed: addCallback,
      style: OutlinedButton.styleFrom(
        backgroundColor: Colors.transparent,
        foregroundColor: Color(0xFF78A4FF),
        side: BorderSide(color: const Color(0xFFC0D5FE), width: 1),
        fixedSize: const Size.fromHeight(32),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 0),
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: const VisualDensity(vertical: -2),
      ),
      label: const Text(
        'Добавить звонок',
        style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500),
      ),
      icon: SvgPicture.asset(
        'assets/images/icons/phone.svg',
        width: 12,
        height: 12,
        fit: BoxFit.contain,
        colorFilter: ColorFilter.mode(lightCornflowerBlue, BlendMode.srcIn),
      ),
    )
     `
    },
    {
      title: 'import provider',
      content: `import 'package:provider/provider.dart';`
  },
  {
    title: 'Register body',
    content: `
    
    {
      "address":{"city_type_full":"город","unrestricted_value":"362044, респ Северная Осетия - Алания, г Владикавказ, ул Куйбышева, д 134 к 4","postal_code":"362044","country":"Россия","country_iso_code":"RU","federal_district":"Северо-Кавказский","region_fias_id":"de459e9c-2933-4923-83d1-9c64cfd7a817","region_kladr_id":"1500000000000","region_iso_code":"RU-SE","region_with_type":"респ Северная Осетия - Алания","region_type":"респ","region_type_full":"республика","region":"Северная Осетия - Алания","area_fias_id":null,"area_kladr_id":null,"area_with_type":null,"area_type":null,"area_type_full":null,"area":null,"sub_area_fias_id":null,"sub_area_kladr_id":null,"sub_area_with_type":null,"sub_area_type":null,"sub_area_type_full":null,"sub_area":null,"city_fias_id":"20ea2341-4f49-4c5c-a9dc-a54688c8cc61","city_kladr_id":"1500000100000","city_with_type":"г Владикавказ","city_type":"г","value":"г Владикавказ, ул Куйбышева, д 134 к 4","city":"Владикавказ","city_area":null,"city_district_fias_id":null,"city_district_kladr_id":null,"city_district_with_type":null,"city_district_type":null,"city_district_type_full":null,"city_district":null,"settlement_fias_id":null,"settlement_kladr_id":null,"settlement_with_type":null,"settlement_type":null,"settlement_type_full":null,"settlement":null,"street_fias_id":"4fe884cb-4aee-4ce5-891b-d6c9a8cba8c9","street_kladr_id":"15000001000018100","street_with_type":"ул Куйбышева","street_type":"ул","street_type_full":"улица","street":"Куйбышева","stead_fias_id":null,"stead_kladr_id":null,"stead_type":null,"stead_type_full":null,"stead":null,"house_fias_id":"3b9b3fcd-8dd3-43aa-88be-81e1ad5b47a6","house_kladr_id":"1500000100001810137","house_type":"д","house_type_full":"дом","unparsed_parts":null,"block_type":"к","block_type_full":"корпус","block":"4","entrance":null,"floor":null,"flat_fias_id":null,"flat_type":null,"flat_type_full":null,"flat":null,"room_fias_id":null,"room_type":null,"room_type_full":null,"room":null,"postal_box":null,"fias_id":"3b9b3fcd-8dd3-43aa-88be-81e1ad5b47a6","fias_code":null,"fias_level":8,"kladr_id":"1500000100001810137","geoname_id":"473249","capital_marker":2,"okato":"90401000000","oktmo":"90701000001","tax_office":"1500","tax_office_legal":"1500","history_values":null,"geo_lat":43.030934,"geo_lon":44.712774,"qc_geo":0,"fias_actuality_state":0,"house":"134"},
      "name":"A asd Asda",
      "phone_number":"79280726859",
      "password":"Passw0rd!"
    }
    `
  },
  {
    title: '-- backend set auth token 15 seconds --',
    content: `
     def _set_auth_tokens(response: Response, phone_number: str) -> tuple[str, str]:
    """Выдаёт access/refresh JWT и записывает их в HTTP-only cookies (как при login)."""
    access_token_expires = timedelta(seconds=10)
    access_token = create_access_token(
        data={"sub": phone_number}, expires_delta=access_token_expires
    )

    refresh_token_expires = timedelta(seconds=25)
    refresh_token = create_refresh_token(
        data={"sub": phone_number}, expires_delta=refresh_token_expires
    )

    response.set_cookie(
        key="access_token",
        value=access_token,
        # max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        max_age=5,
        httponly=True,
        secure=_COOKIE_SECURE,
        samesite="lax",
    )
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        # max_age=settings.REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60,
        max_age=15,
        httponly=True,
        secure=_COOKIE_SECURE,
        samesite="lax",
    )
    return access_token, refresh_token
    `,
  }, 
  {
    title: 'Delete user from table',
    templateFunction: async () => {
      const itemId = (await getUserInput("Enter item_id (user id):")).trim();
      if (!itemId) {
        return "";
      }
      return `
    DELETE FROM transaction where user_id = ${itemId} ;
    DELETE FROM incident_moderations where incident_id in (select id from incidents where user_id = ${itemId});
    DELETE FROM incident_moderations where incident_id in (select id from incidents where user_id = ${itemId});
    DELETE FROM notifications where incident_id in (select id from incidents where user_id = ${itemId});
    DELETE FROM callbacks where incident_id in (select id from incidents where user_id = ${itemId});
    DELETE FROM incidents where user_id = ${itemId};
    DELETE FROM verification_data WHERE user_id = ${itemId};
    DELETE FROM users WHERE id = ${itemId};
    `;
    },
  }, 
  {
    title: 'Chp address --- 126A',
    content: `
      {
    "value": "г Владикавказ, ул Куйбышева, д 126А",
    "unrestricted_value": "362044, респ Северная Осетия - Алания, г Владикавказ, ул Куйбышева, д 126А",
    "postal_code": "362044",
    "country": "Россия",
    "country_iso_code": "RU",
    "federal_district": "Северо-Кавказский",
    "region_fias_id": "de459e9c-2933-4923-83d1-9c64cfd7a817",
    "region_kladr_id": "1500000000000",
    "region_iso_code": "RU-SE",
    "region_with_type": "респ Северная Осетия - Алания",
    "region_type": "респ",
    "region_type_full": "республика",
    "region": "Северная Осетия - Алания",
    "area_fias_id": null,
    "area_kladr_id": null,
    "area_with_type": null,
    "area_type": null,
    "area_type_full": null,
    "area": null,
    "sub_area_fias_id": null,
    "sub_area_kladr_id": null,
    "sub_area_with_type": null,
    "sub_area_type": null,
    "sub_area_type_full": null,
    "sub_area": null,
    "city_fias_id": "20ea2341-4f49-4c5c-a9dc-a54688c8cc61",
    "city_kladr_id": "1500000100000",
    "city_with_type": "г Владикавказ",
    "city_type": "г",
    "city_type_full": "город",
    "city": "Владикавказ",
    "city_area": null,
    "city_district_fias_id": null,
    "city_district_kladr_id": null,
    "city_district_with_type": null,
    "city_district_type": null,
    "city_district_type_full": null,
    "city_district": null,
    "settlement_fias_id": null,
    "settlement_kladr_id": null,
    "settlement_with_type": null,
    "settlement_type": null,
    "settlement_type_full": null,
    "settlement": null,
    "street_fias_id": "4fe884cb-4aee-4ce5-891b-d6c9a8cba8c9",
    "street_kladr_id": "15000001000018100",
    "street_with_type": "ул Куйбышева",
    "street_type": "ул",
    "street_type_full": "улица",
    "street": "Куйбышева",
    "stead_fias_id": null,
    "stead_kladr_id": null,
    "stead_type": null,
    "stead_type_full": null,
    "stead": null,
    "house_fias_id": "20d4cb0c-5828-45e8-84b9-e660ed42c7f7",
    "house_kladr_id": "1500000100001810189",
    "house_type": "д",
    "house_type_full": "дом",
    "house": "126А",
    "block_type": null,
    "block_type_full": null,
    "block": null,
    "entrance": null,
    "floor": null,
    "flat_fias_id": null,
    "flat_type": null,
    "flat_type_full": null,
    "flat": null,
    "room_fias_id": null,
    "room_type": null,
    "room_type_full": null,
    "room": null,
    "postal_box": null,
    "fias_id": "20d4cb0c-5828-45e8-84b9-e660ed42c7f7",
    "fias_code": null,
    "fias_level": 8,
    "kladr_id": "1500000100001810189",
    "geoname_id": "473249",
    "capital_marker": 2,
    "okato": "90401000000",
    "oktmo": "90701000001",
    "tax_office": "1500",
    "tax_office_legal": "1500",
    "history_values": null,
    "geo_lat": 43.030415,
    "geo_lon": 44.711026,
    "qc_geo": 0,
    "fias_actuality_state": 0,
    "unparsed_parts": null
  }
    `,
  }
] as Template[];

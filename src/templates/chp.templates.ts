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
`
    },
    {
        title: 'Get state',
        content: `
        import 'package:provider/provider.dart';
        // import '../providers/app_state_provider.dart';

    final appStateProvider = context.read<AppStateProvider>();
    final state = appStateProvider.state;
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
] as Template[];

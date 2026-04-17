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
    {
  "address": {
    "value": "г Владикавказ, ул Шамиля Джикаева, д 5Б",
    "unrestricted_value": "362020, респ Северная Осетия - Алания, г Владикавказ, ул Шамиля Джикаева, д 5Б",
    "postal_code": "362020",
    "country": "Россия",
    "federal_district": "Северо-Кавказский",
    "region_type": "респ",
    "region": "Северная Осетия - Алания",
    "area_type": null,
    "area": null,
    "city_type": "г",
    "city": "Владикавказ",
    "city_area": null,
    "city_district_type": null,
    "city_district": null,
    "settlement_type": null,
    "settlement": null,
    "street_type": "ул",
    "street": "Шамиля Джикаева",
    "stead_cadnum": null,
    "stead_type": null,
    "stead": null,
    "house_cadnum": null,
    "house_type": "д",
    "house": "5Б",
    "block_type": null,
    "block": null,
    "entrance": null,
    "geoname_id": "473249",
    "geo_lat": "43.0289394",
    "geo_lon": "44.644366",
    "qc_geo": "0",
    "qc_complete": null,
    "qc_house": null,
    "qc": null,
    "unparsed_parts": null
  },
  "name": "A new incident",
  "description": "asdasdasd",
  "predicted_elimination_date": null,
  "incident_organizations": [
    {
      "organization_id": 3,
      "severity": "Минимальная",
      "incident_category_id": 36,
      "incident_responsible_persons": [
        43
      ]
    }
  ],
  "callbacks": []
}
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
        import '../providers/app_state_provider.dart';

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
] as Template[];

import { getUserInput, selectFromList as selectItemFromList } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
  { title: "Filter requests", content: "t:json" },
  {
    title: "Flutter Button1",
    content: `Button(child: Text('123'))`,
  },
  {
    title: "Text interactive",
    templateFunction: async () => {
      const content = await getUserInput('Enter content for text:');
      const size = await getUserInput('Enter size for text:');
      const fontWeight = await getUserInput('Enter font weight for text:');

      return `Text('${content}', style: TextStyle(fontSize: ${size}, fontWeight: FontWeight.w${fontWeight}));`},
  },
  {
    title: "Flutter Button Interactive",
    templateFunction: async () => {
      const res = await getUserInput('Enter something for button:');
      return res + `From function --- Button(child: Text('123'))`},
  },
  {
    title: "CLI install packages",
    content: `flutter pub get`,
  },
    {
    title: "CLI install single package",
    content: `flutter pub add package_name`,
  },
  {
    title: "CLI install specific version",
    content: `flutter pub add package_name:1.2.3`,
  },
  {
    title: "Flutter Button 2",
    content: `
            Button(
                child: Text('2222')    
            )  
        `,
  },
  {
    title: "Elevated Button",
    content: `
        ElevatedButton(
            onPressed: _toggleIncidentsPanel,
            child: Text('Инциденты'),
        ),
`,
  },
  {
    title: "SVG icon (from assets)",
    content: `
        SvgPicture.asset(
          iconPath,
          width: iconWidth,
          height: iconHeight,
          colorFilter: const ColorFilter.mode(Colors.white, BlendMode.srcIn),
        )
`,
  },
  {
    title: "Button with icon ",
    content: `
    FilledButton.icon(
      onPressed: () {},
      style: FilledButton.styleFrom(
        backgroundColor: lightCornflowerBlue,
        disabledBackgroundColor: lightCornflowerBlue.withValues(alpha: 0.45),
        foregroundColor: Colors.white,
        disabledForegroundColor: Colors.white.withValues(alpha: 0.65),
        fixedSize: const Size.fromHeight(39),
        padding: const EdgeInsets.symmetric(
          horizontal: 12,
          vertical: 0,
        ),
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: const VisualDensity(vertical: -2),
      ),
      label: const Text('Добавить инцидент', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600)),
      icon: SvgPicture.asset(
        'assets/images/icons/add.svg',
        width: 14,
        height: 14,
        fit: BoxFit.contain,
        colorFilter: ColorFilter.mode(
          _isCreateIncidentButtonEnabled ? Colors.white : Colors.white.withValues(alpha: 0.65),
          BlendMode.srcIn,
        ),
      ),
    )
`,
  },
   {
    title: "Stateless widget",
    content: `
import 'package:flutter/material.dart';

class UserCard extends StatelessWidget {
  // Поля в Stateless виджете всегда должны быть final
  final String name;
  final VoidCallback onTap;

  // Конструктор
  const UserCard({
    super.key, 
    required this.name, 
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: const Icon(Icons.person, color: Color(0xFF8A76DF)),
        title: Text(name),
        trailing: OutlinedButton(
          onPressed: onTap,
          style: OutlinedButton.styleFrom(
            minimumSize: Size.zero,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            tapTargetSize: MaterialTapTargetSize.shrinkWrap,
          ),
          child: const Text('Выбрать'),
        ),
      ),
    );
  }
}
    `,
  },

  {
    title: "Widget input parameter",
    templateFunction: async () => {
      const typeName = (
        await getUserInput("Enter parameter Dart type (e.g. IncidentCategoryResponse):")
      ).trim();
      const paramName = (await getUserInput("Enter parameter name (camelCase, e.g. category):")).trim();
      const modifier = await selectItemFromList(["required", "optional"], "Select parameter modifier:");
      if (!typeName || !paramName || !modifier) {
        return "";
      }
      const isRequired = modifier === "required";
      const fieldLine = isRequired
        ? `  final ${typeName} ${paramName};`
        : `  final ${typeName}? ${paramName};`;
      const ctorParam = isRequired
        ? `    required this.${paramName},`
        : `    this.${paramName},`;

      return `${fieldLine}
...
  const IncidentOrganization({
   ...
${ctorParam}
   ...
`;
    },
  },

  {
    title: "Stateful widget",
    templateFunction: async () => {
      const widgetName = (await getUserInput("Enter widget class name (PascalCase, e.g. CounterWidget):")).trim();
      return `
import 'package:flutter/material.dart';

class ${widgetName} extends StatefulWidget {
  const ${widgetName}({super.key});

  @override
  State<${widgetName}> createState() => _${widgetName}State();
}

class _${widgetName}State extends State<${widgetName}> {
  // 1. Наше состояние (данные)
  int _counter = 0;

  void _increment() {
    // 2. setState говорит Flutter: "Данные изменились, перерисуй экран!"
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Счетчик: \$_counter'),
        ElevatedButton(
          onPressed: _increment,
          child: const Text('Увеличить'),
        ),
      ],
    );
  }
}
`;
    },
  },

  {
    title: "ListView.builder",
    content: `
      ListView.builder(
        itemCount: items.length, // Сколько элементов в списке
        itemBuilder: (context, index) {
          // Эта функция вызывается только для видимых элементов
          return ListTile(
            title: Text('Элемент №$index'),
          );
        },
      )
    `,
  },

  {
    title: 'Input',
    content: `
class _AddIncidentPanelState extends State<AddIncidentPanel> {
  ...
  final TextEditingController _nameController = TextEditingController();
  ...

        TextField(
      controller: _nameController,
      decoration: InputDecoration(
        hintText: 'Введите название инцидента',
        hintStyle: TextStyle(
          color: deepBlue.withValues(alpha: 0.5),
          fontSize: 14,
          fontWeight: FontWeight.w400,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: BorderSide(color: lightSteelBlue),
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: BorderSide(color: lightSteelBlue),
        ),
        contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      ),
    )
    `,
  },
  {
    title: 'Create freezed class from json',
    content: `
        final addressBase = AddressBase.fromJson(
      <String, Object?>{
          "value": "г Владикавказ, ул Куйбышева, д 134 к 4",
          ...
          "unparsed_parts": null,
        },
    )
    `
  }


] as Template[];

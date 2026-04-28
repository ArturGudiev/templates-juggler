import { Template } from "../types/template.interface.js";

export default [
  { title: "Filter requests", content: "t:json" },
  {
    title: "Flutter Button1",
    content: `Button(child: Text('123'))`,
  },
  {
    title: "CLI install packages",
    content: `flutter pub get`,
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
                          onPressed: _isCreateIncidentButtonEnabled ? () {} : null,
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
  }


] as Template[];
